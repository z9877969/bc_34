import { useState } from "react";
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { registerUser } from "../redux/auth/authOperations";

const options = [
  {
    title: "Email",
    type: "text",
    name: "email",
    placeholder: "Input email...",
  },
  {
    title: "Password",
    type: "text",
    name: "password",
    placeholder: "Input password...",
  },
//   {
//     title: "ConfirmPassword",
//     type: "text",
//     name: "confirmPassword",
//     placeholder: "Confirm password...",
//   },
];

const initialValues = {
  email: "",
  password: "",
//   confirmPassword: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <AuthForm
        options={options}
        initialValues={initialValues}
        to="/login"
        linkTitle="Login"
        cbOnSubmit={handleSubmit}
        submitBtnTitle="Register"
      />
    </>
  );
};

export default RegisterPage;
