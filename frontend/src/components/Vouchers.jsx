import { useState, useEffect } from 'react';
import { Table, Button, message, Select } from 'antd';

import voucherHandler from '../api/vouchers';  
import userHandler from '../api/users';

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [assigningVoucher, setAssigningVoucher] = useState(false);

  // Fetch all users and vouchers from the backend
  const fetchData = async () => {
    try {
      // Fetch users
      const usersData = await userHandler.getAllUsers();
      setUsers(usersData);
      console.log(usersData)

      // Fetch vouchers
      const vouchersData = await voucherHandler.getAllVouchers();
      setVouchers(vouchersData);
      console.log(vouchersData)
    } catch (error) {
      message.error('Failed to load data');
    }
  };

  // Handle voucher assignment to a user
  const handleAssignVoucher = async (voucherId) => {
    if (!selectedUser) {
      message.error('Please select a user');
      return;
    }
    setAssigningVoucher(true);
    try {
      const response = await voucherHandler.assignVoucherToUser(selectedUser, voucherId);
      message.success(response.message || 'Voucher assigned successfully');
      fetchData();  // Refresh users and vouchers
    } catch (error) {
      message.error('Failed to assign voucher');
    }
    setAssigningVoucher(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Voucher Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Button
          type="primary"
          loading={assigningVoucher}
          onClick={() => handleAssignVoucher(record.id)}
        >
          Assign to User
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Voucher Management</h1>
      
      {/* Select User */}
      <Select
        style={{ width: 200, marginBottom: 20 }}
        placeholder="Select a user"
        onChange={(value) => setSelectedUser(value)}
        options={users.map(user => ({ value: user.id, label: user.name }))}
      />

      <Table
        dataSource={vouchers}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
    </div>
  );
};

export default Vouchers;
