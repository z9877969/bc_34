import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

const HomePage = () => {
  const setModalComponent = useContext(ModalContext);
  return (
    <>
      <h1
        onClick={() => {
          console.log("HomePage");
          setModalComponent(
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              alt=""
              width={"400"}
            />
          );
        }}
      >
        Welcome to our Amazing App
      </h1>
    </>
  );
};

export default HomePage;
