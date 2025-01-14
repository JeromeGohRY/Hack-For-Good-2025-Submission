import axios from 'axios';

const usersBaseUrl = 'http://localhost:3001/api/users';
const vouchersBaseUrl = 'http://localhost:3001/api/vouchers';



// Assign a voucher to a user
const assignVoucherToUser = async (userId, voucherId) => {
  const response = await axios.post(`${usersBaseUrl}/${userId}/vouchers`, { voucherId });
  return response.data;
};

// Get all vouchers
const getAllVouchers = () => {
  const request = axios.get(vouchersBaseUrl);
  return request.then(response => response.data);
};

export default {
  assignVoucherToUser,
  getAllVouchers,
};
