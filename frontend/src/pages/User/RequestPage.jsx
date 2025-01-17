import React, { useState } from 'react';
import { Input, Button, Card,message } from 'antd';
import { jwtDecode } from 'jwt-decode';
import userHandler from '../../api/users.js'

const ProductRequestForm = () => {
  const [productName, setProductName] = useState('');
  const [voucherWorth, setVoucherWorth] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async() => {
    if (!productName || !voucherWorth) {
      message.error('Please fill out all fields!');
      return;
    }

    try {
      setLoading(true);

      // Prepare the new wishlist item
      const newWishlistItem = { [productName]: voucherWorth };

      // Call the function to update the user's wishlist
      const token = localStorage.getItem('token');
      jwtDecode(token)
      await userHandler.updateUserWishlistById(jwtDecode(token).id, newWishlistItem);

      message.success('Product request submitted successfully!');
      setProductName('');
      setVoucherWorth('');
    } catch (error) {
      console.error('Error updating wishlist:', error);
      message.error('Failed to submit product request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: 0 }}>Product Requests</h1>
      </header>

      {/* Form Card */}
      <Card
        style={{
          maxWidth: 1200, 
          margin: '50px auto',
          padding: '50px', 
          boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)', 
          fontSize: '60px', 
          lineHeight: '1.6',
        }}
      >
        <div style={{ marginBottom: '30px' }}>
          <label
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '15px',
              fontSize: '20px', // Increased label font size
            }}
          >
            What products would you like to see in the Minimart?
          </label>
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            style={{ borderRadius: '10px', fontSize: '16px', padding: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label
            style={{
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '15px',
              fontSize: '20px', // Increased label font size
            }}
          >
            How many vouchers do you think these products should be worth?
          </label>
          <Input
            value={voucherWorth}
            onChange={(e) => setVoucherWorth(e.target.value)}
            placeholder="Enter voucher worth"
            style={{ borderRadius: '10px', fontSize: '16px', padding: '10px' }}
            rules={[{ required: true, type: "number", min: 1 }]}
          />
        </div>

        <Button
          type="primary"
          onClick={handleSubmit}
          loading={loading}
          style={{
            backgroundColor: '#19bdbd',
            borderColor: '#19bdbd',
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '18px', // Increased button font size
            padding: '10px 20px', // Increased button padding
            borderRadius: '8px',
          }}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default ProductRequestForm;
