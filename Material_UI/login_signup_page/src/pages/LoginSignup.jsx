import React, { useState } from "react";
import { toast } from "react-toastify";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import AuthLinks from "../components/AuthLinks";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign In");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (action === "Sign Up" && !form.name.trim()) {
      tempErrors.name = "Username is required";
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Enter a valid email address";
    }

    if (action !== "Forgot Password") {
      if (!form.password) {
        tempErrors.password = "Password is required";
      } else if (form.password.length < 6) {
        tempErrors.password = "Password must be at least 6 characters";
      }
    }

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length > 0) {
      toast.error("Please fix the highlighted errors");
      return false;
    }

    toast.success(`${action} successful!`);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form Data:", form);

      setForm({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          'url("https://images.unsplash.com/photo-1571260405503-7d97b506f162?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={8} sx={{ padding: 2 }}>
          <Avatar sx={{ backgroundColor: "primary.main", mx: "auto", mb: 1 }}>
            <MailLockOutlinedIcon />
          </Avatar>

          <Typography
            component="h1"
            variant="h5"
            sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
          >
            {action}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            {action === "Sign Up" && (
              <InputField
                name="name"
                placeholder="Enter username"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
            )}

            <InputField
              name="email"
              type="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {action !== "Forgot Password" && (
              <InputField
                name="password"
                type="password"
                fullWidth
                sx={{ mb: 2 }}
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
                error={errors.password}
              />
            )}

            <SubmitButton text={action} />
          </Box>

          <AuthLinks action={action} setAction={setAction} />
        </Paper>
      </Container>
    </div>
  );
};

export default LoginSignup;
