import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleWishlistClick = () => {
    navigate('/wishlist'); // Navigate to Wishlist page
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', borderBottom: '1px solid #ddd' }}>
      <h1 style={{ fontSize: '60px', fontWeight: 'bold', margin: 0 }}>Minimart @ MWH</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button type="primary" shape="round" onClick={handleWishlistClick}>
          My Wishlist
        </Button>
        <Button type="default" shape="round" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;

