import React from 'react';
import { Card, Button } from 'antd';
import VouchersDisplay from '../../components/VoucherDisplay';
import { useCart } from '../../context/CartContext';

const WishlistPage = () => {
  const { wishlistItems, adjustQuantity } = useCart(); // Access wishlist items and adjustment function from context

  const calculateNeededVouchers = () => {
    // Calculate the total number of vouchers needed by type
    const voucherTotals = wishlistItems.reduce((totals, item) => {
      const voucherType = item.voucherType; // Ensure valid voucherType (Tidbit or Stationary)
      if (voucherType) {
        totals[voucherType] = (totals[voucherType] || 0) + item.currentCount * item.voucherCost;
      }
      return totals;
    }, {});

    return voucherTotals;
  };

  const neededVouchers = calculateNeededVouchers();

  // Mock Data for User Vouchers
  const mockVouchers = [
    { id: 1, name: 'Tidbit Voucher', count: 5 },
    { id: 2, name: 'Stationary Voucher', count: 2 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: 0 }}>My Wishlist</h1>
        <Button type="default" shape="round" href="/minimart" style={{ fontSize: '15px' }}>
          Back to Minimart
        </Button>
      </div>

      {/* Vouchers Display */}
      <div style={{ marginTop: '20px' }}>
        <VouchersDisplay vouchers={mockVouchers} />
      </div>

      {/* Needed Vouchers */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        <div style={{ fontSize: '22px', lineHeight: '1.2' }}>
          <h2 style={{ fontWeight: '500', margin: 0, fontSize: '22px' }}>
            To redeem all items on the wishlist, you need:
          </h2>
          {Object.entries(neededVouchers).map(([type, total]) => (
            <p key={type} style={{ fontSize: '30px', margin: 0, fontWeight: 'bold', color: '#19bdbd' }}>
              {total}x {type} Vouchers
            </p>
          ))}
        </div>
        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: '#19bdbd', borderColor: '#19bdbd', color: '#ffffff' }}
        >
          Complete Tasks & Earn Vouchers
        </Button>
      </div>

      {/* Wishlist Items */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
          marginTop: '50px',
        }}
      >
        {wishlistItems.map((item) => (
          <Card
            key={item.id}
            hoverable
            cover={<img alt={item.name} src={item.image || 'placeholder.png'} style={{ height: 150, objectFit: 'contain' }} />}
            style={{ borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          >
            <h3 style={{ margin: '10px 0', fontWeight: 'bold', textAlign: 'center' }}>
              {item.name || 'Unknown Product'}
            </h3>
            <p style={{ textAlign: 'center' }}>
              Total: {item.currentCount * item.voucherCost} {item.voucherType}-Vouchers
            </p>
            <p style={{ textAlign: 'center' }}>Quantity: {item.currentCount}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button
                type="primary"
                shape="circle"
                onClick={() => adjustQuantity(item.id, 1)} // Increment 
                style={{ backgroundColor: '#19bdbd', color: '#ffffff' }}
              >
                +
              </Button>
              <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.currentCount}</span>
              <Button
                type="default"
                shape="circle"
                onClick={() => adjustQuantity(item.id, -1)} // Decrement 
                style={{ color: '#f5222d', borderColor: '#f5222d' }}
              >
                -
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
