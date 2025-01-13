import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProfilePage from '/src/pages/User/ProfilePage.jsx';
import MiniMart from './pages/User/Minimart';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigate('/minimart')}>Go to Minimart</button>
      <button onClick={() => navigate('/profile-page')}>Go to Profile Page</button>
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/minimart" element={<MiniMart/>} /> 
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
