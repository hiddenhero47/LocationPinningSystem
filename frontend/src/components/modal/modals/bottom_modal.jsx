/* eslint-disable react/prop-types */
import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
// import PropTypes from 'prop-types';
import { BottomDialog, BottomSell } from "../index_modal.style";

function ModalBottom({ children, onClose, onOpen, height, animation }, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const ModelSellRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        openModal();
      },
      close() {
        closeModal();
      },
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModal() {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  }

  function openModal() {
    if (onOpen) {
      onOpen();
    }
    setIsOpen(true);
  }

  function handelClose(event) {
    if (event && !event.target.contains(ModelSellRef.current)) {
      return;
    }
    closeModal();
  }

  return (
    <BottomDialog
      open={isOpen}
      onClick={handelClose}
      ref={modalRef}
      onClose={closeModal}
    >
      <BottomSell
        open={isOpen}
        ref={ModelSellRef}
        $isOpen={isOpen}
        height={height}
        $animation={animation}
      >
        {children}
      </BottomSell>
    </BottomDialog>
  );
}

// ModalBottom.propTypes = {
// 	children: PropTypes.node,
// 	onClose: PropTypes.func,
// 	onOpen: PropTypes.func,
// 	height: PropTypes.string,
// 	animation: PropTypes.bool,
// };

export default forwardRef(ModalBottom);
