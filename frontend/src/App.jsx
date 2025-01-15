import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProfilePage from '/src/pages/User/ProfilePage.jsx';
import MiniMart from './pages/User/Minimart';
import Products from './components/Products';
import Vouchers from './components/Vouchers';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import WishlistPage from './pages/User/Wishlist';
import { CartProvider } from './context/CartContext';
import ProductRequestForm from './pages/User/RequestPage';


const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Navigation Page</h1>
      <button onClick={() => navigate('/minimart')}>Go to Minimart</button>
      <button onClick={() => navigate('/profile-page')}>Go to Profile Page</button>
      <button onClick={() => navigate('/products')}>Go to Products Page</button>
      <button onClick={() => navigate('/vouchers')}>Go to Voucher Page</button>
      <button onClick={() => navigate('/login')}>Go to Login Page</button>
    </div>
  );
};


const App = () => {
  return (
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Navigate />} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path='/create-user' element={<CreateUser/>}/>
        <Route path="/minimart" element={<MiniMart/>} /> 
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/vouchers" element={<Vouchers/>}/>
        <Route path = "/wishlist" element = {<WishlistPage/>}/>
        <Route path = "/request-page" element = {<ProductRequestForm/>}/>
      </Routes>
    </Router>

    </CartProvider>
    
  );
};

export default App;
