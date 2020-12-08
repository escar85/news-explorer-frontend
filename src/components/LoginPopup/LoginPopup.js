import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function LoginPopup(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({
      password: values.password,
      email: values.email
    })
  }

  return (
    <PopupWithFrom
      name='login'
      title='Вход'
      submitButtonName='Войти'
      redirectButtonName='Зарегистрироваться'
      isOpen={props.isOpen}
      isValid={isValid}
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
        onChange={handleChange}
        errorText={errors.email}
        label='Email'
      />

      <PopupInput
        name='password'
        minLength='8'
        maxLength='30'
        id='inputPasswordLogin'
        placeholder='Введите пароль'
        onChange={handleChange}
        errorText={errors.password}
        label='Пароль'
      />

    </PopupWithFrom>
  );
};

export default LoginPopup;
