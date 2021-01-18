import React from 'react';
import modalStyles from './modal-alert.module.scss';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? `${modalStyles.modal} ${modalStyles.displayBlock}`
    : `${modalStyles.modal} ${modalStyles.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={modalStyles.modalMain}>
        <button
          type="button"
          aria-label="Close form submission modal box"
          onClick={handleClose}
        >
          <span>&times;</span>
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
