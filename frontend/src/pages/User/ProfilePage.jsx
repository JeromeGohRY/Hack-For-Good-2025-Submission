import React from 'react';

const ProfilePage = () => {
  return (
    <div>
        <h1>Profile Page</h1>

        {/* User Information */}
        <section>
        <h2>Welcome, [User's Name]</h2>
        <p>Email: [User's Email]</p>
        <p>Points: [User's Points]</p>
        </section>

        {/* Vouchers */}
        <section>
        <h3>Your Vouchers:</h3>
        <ul>
          <li>Voucher 1: $10 - Expires on 2025-12-31</li>
          <li>Voucher 2: $5 - Expires on 2025-11-15</li>
        </ul>
        </section>

        {/* Awards */}
        <section>
        <h3>Your Awards:</h3>
        <ul>
          <li>Room of the Month</li>
          <li>Award 2</li>
          <li>Award 3</li>
        </ul>
        </section>

    </div>
  );
};

export default ProfilePage;
