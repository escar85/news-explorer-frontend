import React, { useState } from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';

function LoginPopup(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <PopupWithFrom
      name='login'
      title='Вход'
      submitButtonName='Войти'
      redirectButtonName='Зарегистрироваться'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      redirectTo={props.redirectTo}
    >

      <PopupInput
        name='email'
        minLength='6'
        maxLength='30'
        id='inputEmailLogin'
        placeholder='Введите почту'
        onChange={handleEmailChange}
        label='Email'
      />

      <PopupInput
        name='password'
        minLength='7'
        maxLength='30'
        id='inputPasswordLogin'
        placeholder='Введите пароль'
        onChange={handlePasswordChange}
        label='Пароль'
      />

    </PopupWithFrom>
  );
};

export default LoginPopup;
