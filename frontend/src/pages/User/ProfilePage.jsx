import React from 'react';

const ProfilePage = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f7f6', padding: '30px', maxWidth: '800px', margin: 'auto', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333', fontSize: '36px', marginBottom: '20px' }}>Profile Page</h1>

      {/* User Information */}
      <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', color: '#2c3e50' }}>Welcome, <span style={{ color: '#e74c3c' }}>[User's Name]</span></h2>
        <p style={{ fontSize: '18px', color: '#7f8c8d' }}>Email: <strong>[User's Email]</strong></p>
        <p style={{ fontSize: '18px', color: '#7f8c8d' }}>Points: <strong>[User's Points]</strong></p>
      </section>

      {/* Vouchers */}
      <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '24px', color: '#2980b9' }}>Your Vouchers:</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ fontSize: '18px', marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Voucher 1:</span> $10 - Expires on <span style={{ color: '#e74c3c' }}>2025-12-31</span>
          </li>
          <li style={{ fontSize: '18px' }}>
            <span style={{ fontWeight: 'bold' }}>Voucher 2:</span> $5 - Expires on <span style={{ color: '#e74c3c' }}>2025-11-15</span>
          </li>
        </ul>
      </section>

      {/* Awards */}
      <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
        <h3 style={{ fontSize: '24px', color: '#27ae60' }}>Your Awards:</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ fontSize: '18px', marginBottom: '10px' }}>Room of the Month</li>
          <li style={{ fontSize: '18px' }}>Award 2</li>
          <li style={{ fontSize: '18px' }}>Award 3</li>
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
