import React from 'react';

function SuccessPopup(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''} popup-successPopup`}>
      <div name='successPopup' className="popup__container" id='successPopup'>
        <h3 className="popup__title">Пользователь успешно зарегистрирован!</h3>
        <button type="button" aria-label="close" className="popup__close-button" onClick={props.onClose}></button>
        <button className="popup__redirect-button popup__redirect-button_withoutForm" onClick={props.redirectTo}>Войти</button>
      </div>
    </section>
  );
}

export default SuccessPopup;
