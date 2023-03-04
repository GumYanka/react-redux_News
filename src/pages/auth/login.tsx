import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/user-slice";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FieldError, useForm } from "react-hook-form";
import validationSchema from "../../validation/login-schema";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

const theme = createTheme();

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (e: ChangeEvent<any>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitValue = () => {
    dispatch(login(formData));
    let setNew = JSON.parse(localStorage.getItem("currentUser") as any);
    if (setNew != null) {
      navigate("/profile");
      toast.success(t("success-login"));
    } else {
      toast.error(t("unsuccess-login"));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography fontFamily="Montserrat" component="h1" variant="h5">
            {t("login")}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSubmitValue)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              {...register("username")}
              margin="normal"
              required
              fullWidth
              id="username"
              label={t("username")}
              name="username"
              autoComplete="username"
              value={formData.username}
              onChange={handleChange}
              autoFocus
              className="font-['Montserrat']"
            />
            {errors.username && (
              <span className="font-['Montserrat'] text-red-500 text-[13px]">
                {(errors.username as FieldError)?.message}
              </span>
            )}
            <TextField
              {...register("password")}
              margin="normal"
              required
              fullWidth
              label={t("password")}
              autoComplete="current-password"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="font-['Montserrat']"
            />
            {errors.password && (
              <span className="font-['Montserrat'] text-red-500 text-[13px]">
                {(errors.password as FieldError)?.message}
              </span>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className="font-['Montserrat']"
            >
              {t("sign-in")}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
