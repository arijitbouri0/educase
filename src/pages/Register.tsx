import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  FormLabel,
  FormControl,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      localStorage.setItem("userData", JSON.stringify(formData));
  toast.success("Account created successfully!");
  navigate("/profile");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 500,
          height: "100%",
          p: 4,
          bgcolor: "#f7f9fc",
          borderRadius: 1,
          boxShadow: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Create your
        </Typography>
        <Typography variant="h4" fontWeight={700} mb={2}>
          PopX account
        </Typography>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Box sx={{ flexGrow: 1 }}>
          <TextField
            fullWidth
            required
            size="medium"
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            margin="dense"
            sx={{
              "& label.Mui-focused": {
                color: "#6c25ff", 
              },
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": { borderColor: "#6c25ff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#6c25ff", 
                },
              },
            }}
          />
          <TextField
            fullWidth
            required
            size="medium"
            label="Phone number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="dense"
            sx={{
              "& label.Mui-focused": {
                color: "#6c25ff", 
              },
              "& .MuiOutlinedInput-root": {
                 "&:hover fieldset": { borderColor: "#6c25ff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#6c25ff", 
              }},
            }}
          />
          <TextField
            fullWidth
            required
           size="medium"
            label="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="dense"
            sx={{
              "& label.Mui-focused": {
                color: "#6c25ff", 
              },
              "& .MuiOutlinedInput-root": {
                 "&:hover fieldset": { borderColor: "#6c25ff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#6c25ff", 
                },
              },
            }}
          />
          <TextField
            fullWidth
            required
            size="medium"
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="dense"
            sx={{
              "& label.Mui-focused": {
                color: "#6c25ff", 
              },
              "& .MuiOutlinedInput-root": {
                 "&:hover fieldset": { borderColor: "#6c25ff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#6c25ff", 
              }},
            }}
          />
          <TextField
            fullWidth
            size="medium"
            label="Company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            margin="dense"
            sx={{
              "& label.Mui-focused": {
                color: "#6c25ff",
              },
              "& .MuiOutlinedInput-root": {
                 "&:hover fieldset": { borderColor: "#6c25ff" },
                "&.Mui-focused fieldset": {
                  borderColor: "#6c25ff", 
                },
              },
            }}
          />

          <FormControl component="fieldset" margin="normal" sx={{ mt: 1 }}>
            <FormLabel component="legend" sx={{ fontSize: "0.875rem" }}>
              Are you an Agency? <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <RadioGroup
              row
              value={formData.isAgency}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, isAgency: e.target.value }))
              }
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: "#6c25ff", 
                      "&.Mui-checked": {
                        color: "#6c25ff", 
                      },
                    }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    size="small"
                    sx={{
                      color: "#8f00ff",
                      "&.Mui-checked": {
                        color: "#8f00ff",
                      },
                    }}
                  />
                }
                label="No"
              />
            </RadioGroup>
          </FormControl>
          </Box>
          <Box sx={{ mt: "auto" }} >
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "#6c25ff",
              ":hover": { bgcolor: "#5a1fe0" },
              fontSize: "0.875rem",
              textTransform: "none",
              py: 1,
            }}
          >
            Create Account
          </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default RegisterForm;
