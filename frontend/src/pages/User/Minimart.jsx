import {useState, useEffect} from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import VouchersDisplay from '../../components/VoucherDisplay';
import ProductGrid from '../../components/ProductGrid';
import { useCart } from '../../context/CartContext';
import userHandler from '../../api/users.js'


const Minimart = () => {
  const { updateWishlist } = useCart();
  const [userVouchers, setUserVouchers] = useState([]);
 

  // Mock Data for Products
  const mockProducts = [
    { id: 1, name: 'Twisties', voucherCost: 3, image: 'https://m.media-amazon.com/images/I/81KfG3VPY0L.jpg', voucherType: 'Tidbit' },
    { id: 2, name: 'Cup Noodles', voucherCost: 4, image: 'https://m.media-amazon.com/images/I/91mA3o5aXzL.jpg', voucherType: 'Tidbit' },
    { id: 3, name: 'Pilot Pen', voucherCost: 2, image: 'https://www.pilotpen.com.sg/wp-content/uploads/2019/10/Evolt-L.jpg', voucherType: 'Stationary' },
    { id: 4, name: 'Correction Tape', voucherCost: 5, image: 'https://os.popular.com.sg/image/cache/data/product/13331001-500x500.jpg', voucherType: 'Stationary' },
  ];

  // Function to fetch vouchers based on the user ID
  const fetchUserVouchers = async (userId) => {
    try {
      const response = await userHandler.getUserById(userId);
      console.log(response);

      // Transform the map { tidbit: 5, stationary: 3 } into an array
      const vouchersArray = Object.entries(response.vouchers).map(([key, value], index) => ({
        id: index + 1,
        name: `${key.charAt(0).toUpperCase()}${key.slice(1)} Voucher`, // Capitalize the first letter
        count: value,
      }));

      setUserVouchers(vouchersArray);
    } catch (error) {
      console.error(error);
    }
  };

  // Decode token and fetch vouchers on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id; // Extract user ID from token
        fetchUserVouchers(userId); // Fetch vouchers for this user
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  const handleAddToWishlist = (product) => {
    updateWishlist({
      ...product,
      currentCount: 1, 
      voucherType: product.voucherType, 
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header Section */}
      <Header />

      {/* Vouchers Display */}
      <div style={{ marginTop: '20px' }}>
        <VouchersDisplay vouchers={userVouchers} />
      </div>

      {/* Available Products Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Available Products:</h2>
        <Link
          to="/request-page"
          style={{
            textDecoration: 'underline',
            fontSize: '18px',
            color: '#19bdbd',
            fontWeight: 'bold',
          }}
        >
          Request for Products
        </Link>
      </div>

      {/* Product Grid */}
      <ProductGrid products={mockProducts} onAddToWishlist={handleAddToWishlist} />
    </div>
  );
};

export default Minimart;
