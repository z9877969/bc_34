import { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal");

class Modal extends Component {
  handleCloseModal = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      this.props.setModalData();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModal);
  }

  render() {
    const { modalData } = this.props;

    return createPortal(
      <div className={s.backdrop} onClick={this.handleCloseModal}>
        <h1 className={s.title}>
          <a href={modalData.url} target="_blank" rel="noreferrer">
            {modalData.title}
          </a>
        </h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;


