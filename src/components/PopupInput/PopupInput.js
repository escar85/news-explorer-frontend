import React from 'react';

function PopupInput(props) {
  return (
    <>
    <label className='popup__input_label'>{props.label}</label>
    <input
    type={props.name}
    name={props.name}
    required
    minLength={props.minLength}
    maxLength={props.maxLength}
    className="popup__input"
    id={props.id}
    placeholder={props.placeholder}
    onChange={props.onChange}
  />
  <span className="popup__input_type_error" id="inputName-error"></span>
  </>
  );
};

export default PopupInput;
