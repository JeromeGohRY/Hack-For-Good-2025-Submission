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
      localStorage.setItem('token', response.data.token);
      message.success(response.data.message);
      console.log("submitted!");
      navigate("/navigate");
    } catch (error) {
      if (error.response) {
        message.error(error.response.data.message || "Error logging in");
      } else {
        message.error("Network error or server not reachable");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full screen height
        width: "100vw", // Full screen width
        backgroundColor: "#f5f5f5", // Optional: light background color
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
          padding: "30px",
          borderRadius: "10px",
          backgroundColor: "#fff", // Optional: white card-like background
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: slight shadow
        }}
      >
        {/* Logo */}
        <img
          src="/org logo.png" // Path to your logo
          alt="Organization Logo"
          style={{
            maxWidth: "450px", // Enlarged logo
            marginBottom: "30px",
          }}
        />

        {/* User ID Input */}
        <div style={{ marginBottom: "15px" }}>
          <Input
            placeholder="User ID"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            style={{
              borderRadius: "10px",
              height: "40px",
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "15px" }}>
          <Input.Password
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            style={{
              borderRadius: "10px",
              height: "40px",
              fontSize: "16px",
              padding: "10px",
            }}
          />
        </div>

        {/* Signup Link */}
        <div style={{ textAlign: "right", marginBottom: "20px" }}>
          <a href="/signup" style={{ color: "#1890ff", fontSize: "14px" }}>
            Sign up
          </a>
        </div>

        {/* Login Button */}
        <Button
          type="primary"
          onClick={handleLogin}
          style={{
            backgroundColor: "#003a8c",
            borderColor: "#003a8c",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "8px",
            width: "100%",
            height: "40px",
          }}
        >
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
