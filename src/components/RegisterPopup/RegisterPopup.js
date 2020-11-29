import React, { useState } from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';

function RegisterPopup(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithFrom
      name='register'
      title='Регистрация'
      submitButtonName='Зарегистрироваться'
      redirectButtonName='Войти'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      redirectTo={props.redirectTo}
    >

      <PopupInput
        name='email'
        minLength='6'
        maxLength='30'
        id='inputEmail'
        placeholder='Введите почту'
        onChange={handleEmailChange}
        label='Email'
      />

      <PopupInput
        name='password'
        minLength='7'
        maxLength='30'
        id='inputPassword'
        placeholder='Введите пароль'
        onChange={handlePasswordChange}
        label='Пароль'
      />

<PopupInput
        name='name'
        minLength='2'
        maxLength='30'
        id='inputName'
        placeholder='Введите своё имя'
        onChange={handleNameChange}
        label='Имя'
      />

    </PopupWithFrom>
  );
};

export default RegisterPopup;
