import { useState, useEffect } from 'react';
import { Table, Button, message, Select, Modal, Form, Input } from 'antd';

import voucherHandler from '../api/vouchers';  
import userHandler from '../api/users';

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [assigningVoucher, setAssigningVoucher] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [creatingVoucher, setCreatingVoucher] = useState(false); 


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

  // Handle voucher deletion
  const handleDeleteVoucher = async (voucherId) => {
    try {
      await voucherHandler.deleteVoucher(voucherId);
      message.success('Voucher deleted successfully');
      fetchData(); // Refresh vouchers
    } catch (error) {
      message.error('Failed to delete voucher');
    }
  };

  // Handle voucher creation
  const handleCreateVoucher = async (values) => {
    setCreatingVoucher(true);
    try {
      await voucherHandler.createVoucher(values);
      message.success('Voucher created successfully');
      fetchData(); // Refresh vouchers
      setIsModalVisible(false); // Close modal
    } catch (error) {
      message.error('Failed to create voucher');
    }
    setCreatingVoucher(false);
  };



  const columns = [
    {
      title: 'Voucher name',
      dataIndex: 'name',
      key: 'name',
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
        <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          type="primary"
          loading={assigningVoucher}
          onClick={() => handleAssignVoucher(record.id)}
        >
          Assign to User
        </Button>
        <Button
            type="danger"
            onClick={() => handleDeleteVoucher(record.id)}
          >
            Delete
          </Button>
        </div>
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
       {/* Add Voucher Button */}
       <Button
        type="primary"
        style={{ marginBottom: 20 }}
        onClick={() => setIsModalVisible(true)}
      >
        Add Voucher
      </Button>

      <Table
        dataSource={vouchers}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

       {/* Modal for Adding Voucher */}
       <Modal
        title="Create Voucher"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={handleCreateVoucher}
        >
          <Form.Item
            label="Voucher Name"
            name="name"
            rules={[{ required: true, message: 'Please enter voucher name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please enter voucher description' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={creatingVoucher}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Vouchers;
