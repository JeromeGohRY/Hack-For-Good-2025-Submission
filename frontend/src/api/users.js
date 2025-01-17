import axios from 'axios';

const usersBaseUrl = '/api/users';

//No users yet

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

const getUserById = async id =>{
    const response=await axios.get(`${usersBaseUrl}/${id}`)
    return response.data
}

const updateUserWishlistById = async (id, newWishlistItem) => {
  const { data: user } = await axios.get(`${usersBaseUrl}/${id}`);
 
  // Merge the new wishlist item into the existing wishlist 
  const updatedWishlist = { ...user.wishlist, ...newWishlistItem };
  
  // Update the entire user object with the modified wishlist
  const updatedUser = { ...user, wishlist: updatedWishlist };
  const response = await axios.put(`${usersBaseUrl}/wishlist/${id}`, updatedUser)
  return response.data
}
export default {getAllUsers, createUser, getUserById, updateUserWishlistById}