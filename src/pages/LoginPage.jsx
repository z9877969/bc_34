import { useDispatch } from "react-redux";
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

  const cbOnSubmit = (form) => {
    dispatch(loginUser(form));
  };
  return (
    <>
      <h1>LoginPage</h1>
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
