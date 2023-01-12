import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import { loginUser } from "../redux/auth/authOperations";

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
];

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("location :>> ", location);

  const cbOnSubmit = (form) => {
    dispatch(loginUser(form));
  };
  return (
    <>
      <h1>LoginPage</h1>
      <Link to={location.state?.from || "/login"}>GoBack</Link>
      <AuthForm
        to="/register"
        linkTitle="Register"
        cbOnSubmit={cbOnSubmit}
        submitBtnTitle="Login"
        options={options}
        initialValues={initialValues}
      />
    </>
  );
};

export default LoginPage;
