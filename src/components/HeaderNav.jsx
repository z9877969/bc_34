import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

const linkStyle = { padding: "16px", display: "inline-block" };

const setActiveLink = ({ isActive }) => {
  return isActive
    ? { ...linkStyle, color: "red", fontWeight: "bold" }
    : linkStyle;
};

const HeaderNav = () => {
  return (
    <header
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <nav>
        <ul
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
          }}
        >
          <li>
            <NavLink style={setActiveLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={setActiveLink} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={setActiveLink} to="/gallery">
              Gallery
            </NavLink>
          </li>
        </ul>
      </nav>
      <SearchForm />
    </header>
  );
};

export default HeaderNav;

// const L = ({ to, children = "", state = null }) => {
//   const navigate = useNavigate();

//   return (
//     <a
//       href={to}
//       onClick={(e) => {
//         e.preventDefault();
//         navigate(to, { state: state }); // l-1 {state} | l-2 {state} | l-3 {state}
//       }}
//     >
//       {children}
//     </a>
//   );
// };
