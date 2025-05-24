import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PopXLoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     const storedUser = localStorage.getItem("userData");
    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (
      formData.email === parsedUser.email &&
      formData.password === parsedUser.password
    ) {
      toast.success("Login successful!");
      navigate("/profile"); 
      toast.error("Invalid email or password");
    }
  };

  const isDisabled = !formData.email || !formData.password;

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          height: "100%",
          bgcolor: "#f7f9fc",
          p: 4,
          borderRadius: 1,
          border: "1px solid #e0e0e0",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={1}>
          Signin to your <br /> PopX account
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Typography>
        <TextField
          fullWidth
          name="email"
          label="Email Address"
          placeholder="Enter email address"
          variant="outlined"
          size="small"
          margin="dense"
          onChange={handleChange}
          value={formData.email}
          sx={{
            mb: 2,
            "& label": { color: "#6c25ff" },
            "& label.Mui-focused": { color: "#6c25ff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#e0e0e0s" },
              "&:hover fieldset": { borderColor: "#6c25ff" },
              "&.Mui-focused fieldset": { borderColor: "#6c25ff" },
            },
          }}
        />
        <TextField
          fullWidth
          name="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          size="small"
          margin="dense"
          onChange={handleChange}
          value={formData.password}
          sx={{
            mb: 3,
            "& label": { color: "#6c25ff" },
            "& label.Mui-focused": { color: "#6c25ff" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#e0e0e0" },
              "&:hover fieldset": { borderColor: "#6c25ff" },
              "&.Mui-focused fieldset": { borderColor: "#6c25ff" },
            },
          }}
        />
        <Button
          type="submit"
          fullWidth
          disabled={isDisabled}
          onClick={handleSubmit}
          sx={{
            bgcolor: isDisabled ? "#d3d3d3" : "#6c25ff",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            py: 1.2,
            "&:hover": {
              bgcolor: isDisabled ? "#d3d3d3" : "#5a1fe0",
            },
            "&.Mui-disabled": {
              color: "#fff", 
              bgcolor: "#d3d3d3", 
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default PopXLoginForm;
