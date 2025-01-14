import axios from 'axios';

const usersBaseUrl = 'http://localhost:3001/api/users';

// Get all users
const getAllUsers = () => {
    const request = axios.get(usersBaseUrl);
    return request.then(response => response.data);
  };
  
  // Create a new user
const createUser = async (newUser) => {
    const response = await axios.post(usersBaseUrl, newUser);
    return response.data;
  };

export default {getAllUsers, createUser}