import React from 'react';
import { Card } from 'antd';

const VouchersDisplay = ({ vouchers }) => {
    const backgrounds = {
      'Tidbit Voucher': 'url("/food coupon bg copy.png")',
      'Stationary Voucher': 'url("/stationery coupon bg.jpg")',
    };
  
    
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px 0' }}>
 
      <div style={{ fontWeight: '500', fontSize: '25px' }}>Your Vouchers:</div>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            style={{
              width: '350px',
              height: '200px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: backgrounds[voucher.name],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              textAlign: 'center',
              color: 'black',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <span style={{fontSize: '22px'}}>{voucher.count}x {voucher.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VouchersDisplay;