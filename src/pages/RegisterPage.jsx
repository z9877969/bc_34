import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
];

const initialValues = {
  email: "",
  password: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()

  const handleSubmit = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <>
      <h1>RegisterPage</h1>
      <button type="button" onClick={() => navigate("/login", { state: {from: location} })}>
        GoBack
      </button>
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
