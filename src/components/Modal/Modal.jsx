import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal");

const Modal = ({ children, closeModal }) => {
  return createPortal(
    <div
      className={s.wrapper}
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
