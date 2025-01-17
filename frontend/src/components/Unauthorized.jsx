import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();  // Use this for redirection

  const handleBackToHome = () => {
    navigate('/');  // Redirect user to login page
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={handleBackToHome}>
            Go to Homepage
          </Button>
        }
      />
    </div>
  );
};

export default Unauthorized;
