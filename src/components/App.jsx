import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import GalleryPage from "./GalleryPage";
import HeaderNav from "./HeaderNav";
import HomePage from "./HomePage";

const App = () => {
  
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
