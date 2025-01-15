import { useState } from "react";
import { Input, Button, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", formData);
      message.success(response.data.message);
      console.log("submitted!")
      navigate('/')
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        message.error(error.response.data.message || "Error logging in");
      } else {
        // Network or other errors
        message.error("Network error or server not reachable");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <Input
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        style={{ marginBottom: "10px" }}
      />
      <Input.Password
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        style={{ marginBottom: "10px" }}
      />
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
