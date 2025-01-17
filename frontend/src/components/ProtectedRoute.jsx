import { jwtDecode } from "jwt-decode";
import { Navigate} from 'react-router-dom';
// Get the role from the JWT token
const getUserRole = () => {
  const token = localStorage.getItem('token');
  if (!token) return null; // No token, no role
  const decoded = jwtDecode(token); // Decode the JWT
  return decoded.role; // Get the role from the decoded token
};

// Check if user is authenticated and has the necessary role
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // If token exists, the user is authenticated
};

const ProtectedRoute = ({ element, requiredRole, ...rest }) => {
    const role = getUserRole();
    if (!isAuthenticated()) {
      return <Navigate to="/login" />;
    }
  
    if (role !== requiredRole) {
      return <Navigate to="/unauthorized" />; // Redirect to unauthorized page if the role doesn't match
    }
  
    return element;
  };
  
export default ProtectedRoute;