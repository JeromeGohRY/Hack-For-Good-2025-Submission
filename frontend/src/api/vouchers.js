import axios from 'axios';

const usersBaseUrl = '/api/users';
const vouchersBaseUrl = '/api/vouchers';



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

//Create a voucher
const createVoucher = async (newVoucher) => {
  const response = await axios.post(vouchersBaseUrl, newVoucher);
  return response.data;
};

//Delete a voucher

const deleteVoucher = async id => {
  // const config = {
  //   headers: { Authorization: token },
  // }
  const response=await axios.delete(`${vouchersBaseUrl}/${id}`)
  return response.data
}

export default {
  assignVoucherToUser,
  getAllVouchers,
  createVoucher,
  deleteVoucher,
};
