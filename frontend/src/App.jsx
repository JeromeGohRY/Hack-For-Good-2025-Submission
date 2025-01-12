import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/product-catalog" element={<div>Product Catalog</div>} />
        <Route path="/voucher" element={<div>Vouchers</div>} />
      </Routes>
    </Router>
  );
};

export default App;
