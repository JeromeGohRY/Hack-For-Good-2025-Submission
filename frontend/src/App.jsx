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
import AssignVoucherForm from './pages/User/AssignVoucherForm';
import ProductCatalog from './pages/User/ProductCatalog';
import ProductRequestPage from './pages/User/ProductRequestPage';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './components/Unauthorized';

const Navigate = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <img
        src="https://mwh.muhammadiyah.org.sg/wp-content/uploads/2021/06/mwh-esig-footer-062.png"
        alt="Muhammadiyah Welfare Home Logo"
        style={styles.logo}
      />
      <h1 style={styles.header}>Welcome to Muhammadiyah Welfare Home Minimart</h1>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => navigate('/minimart')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Go to Minimart
        </button>
        <button
          style={styles.button}
          onClick={() => navigate('/profile-page')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Go to Profile Page
        </button>
        <button
          style={styles.button}
          onClick={() => navigate('/products')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Go to Products Page
        </button>
        <button
          style={styles.button}
          onClick={() => navigate('/vouchers')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Go to Voucher Page
        </button>
        {/* <button
          style={styles.button}
          onClick={() => navigate('/login')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Go to Login Page
        </button> */}
        {/* <button
          style={styles.button}
          onClick={() => navigate('/assign-voucher')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Assign Vouchers
        </button> */}
        {/* <button
          style={styles.button}
          onClick={() => navigate('/product-catalog')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#3498db')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#2980b9')}
        >
          Product Catalog
        </button> */}
        <button
          style={styles.logoutButton}
          onClick={() => navigate('/login')}
          onMouseEnter={e => (e.target.style.backgroundColor = '#c0392b')}
          onMouseLeave={e => (e.target.style.backgroundColor = '#e74c3c')}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f4f7f6',
    height: '100vh',
  },
  logo: {
    maxWidth: '300px',
    marginBottom: '20px',
    objectFit: 'contain',
  },
  header: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#2980b9',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '250px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  logoutButton: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '250px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/navigate" element={<Navigate />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/sign-up" element={<CreateUser />} />
          <Route path="/minimart" element={<MiniMart />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProtectedRoute element={<Products />} requiredRole="admin" />} />
          <Route path="/vouchers" element={<ProtectedRoute element={<Vouchers />} requiredRole="admin" />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/request-page" element={<ProductRequestForm />} />
          <Route path="/assign-voucher" element={<AssignVoucherForm />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/product-request" element={<ProductRequestPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
