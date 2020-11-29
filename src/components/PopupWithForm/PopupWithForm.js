import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen ? 'popup_opened' : ''} popup-${props.name}`}>
      <form name={props.name} onSubmit={props.onSubmit} method="post" action="#" className="popup__container" id={props.name} noValidate>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button type="submit" className="popup__submit-button">{props.submitButtonName}</button>
        <button type="button" aria-label="close" className="popup__close-button" onClick={props.onClose}></button>
        <button className="popup__redirect-button" onClick={props.redirectTo}>или <span className="popup__span">{props.redirectButtonName}</span></button>
      </form>
    </section>
  );
}

export default PopupWithForm;
