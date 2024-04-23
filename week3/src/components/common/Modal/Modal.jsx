import { createPortal } from "react-dom";
import { backgroundStyle, overlayStyle } from "./Modal.style";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, ...props }) => {
  const parentElement = document.body;

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    isOpen && (
      <>
        <div css={backgroundStyle} />
        {createPortal(
          <dialog css={overlayStyle} {...props}>
            {props.children}
          </dialog>,
          parentElement
        )}
      </>
    )
  );
};

export default Modal;
