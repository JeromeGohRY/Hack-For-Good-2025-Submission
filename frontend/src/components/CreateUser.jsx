import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select, message } from "antd";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate()

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("/api/users", formData);
      message.success(response.data.message);
      console.log("Created user!")
      navigate('/login')
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        message.error(error.response.data.message || "Error creating user");
      } else {
        // Network or other errors
        message.error("Network error or server not reachable");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create User</h2>
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
      <Select
        placeholder="Select Role"
        onChange={(value) => setFormData({ ...formData, role: value })}
        options={[
          { value: "user", label: "User" },
          { value: "admin", label: "Admin" },
        ]}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <Button type="primary" onClick={handleCreateUser}>
        Create User
      </Button>
    </div>
  );
};

export default CreateUser;
