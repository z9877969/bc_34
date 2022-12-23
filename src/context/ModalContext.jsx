import { createContext, useState } from "react";
import Modal from "../components/Modal/Modal";
import TodoForm from "../components/TodoForm/TodoForm";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalComponent, setModalComponent] = useState(null); // component

  const closeModal = () => setModalComponent(null);

  return (
    <ModalContext.Provider value={setModalComponent}>
      {children}
      {modalComponent && (
        <Modal closeModal={closeModal}>{modalComponent}</Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
