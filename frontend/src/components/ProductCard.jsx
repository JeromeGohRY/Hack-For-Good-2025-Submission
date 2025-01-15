import React, { useState } from 'react';
import { Card, Button } from 'antd';

const ProductCard = ({ product, onAddToWishlist }) => {
  // State to track the count for the individual card
  const [wishlistCount, setWishlistCount] = useState(0);

  const handleWishlistClick = () => {
    const newCount = wishlistCount + 1;
    setWishlistCount(newCount); // Increment the local count
    onAddToWishlist({ ...product, currentCount: newCount }); // Sync with the wishlist
  };

  return (
    <Card
      hoverable
      cover={<img alt={product.name} src={product.image || 'placeholder.png'} style={{ height: 150, objectFit: 'contain' }} />}
      style={{
        width: 200,
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ fontWeight: 'bold', textAlign: 'center' }}>{product.name}</h3>
      <p style={{ textAlign: 'center' }}>
        {product.voucherCost} {product.voucherType} Voucher(s)
      </p>
      <Button
        block
        onClick={handleWishlistClick}
        style={{
          backgroundColor: '#19bdbd',
          color: 'white',
          border: 'none',
          fontWeight: 'bold',
        }}
      >
        Wishlist +
      </Button>
      {/* Display the counter */}
      <p style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold' }}>
        Count: <span style={{ color: '#19bdbd' }}>{wishlistCount}</span>
      </p>
    </Card>
  );
};

export default ProductCard;
