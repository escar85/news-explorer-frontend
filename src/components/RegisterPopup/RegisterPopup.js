import React from 'react';
import PopupWithFrom from '../PopupWithForm/PopupWithForm';
import PopupInput from '../PopupInput/PopupInput';
import { useFormWithValidation } from '../../utils/Validation';

function RegisterPopup(props) {

  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleSubmit(e) {
    e.preventDefault();

    props.onRegister({
      password: values.password,
      email: values.email,
      name: values.name
    })
  }

  return (
    <PopupWithFrom
      name='register'
      title='Регистрация'
      submitButtonName='Зарегистрироваться'
      redirectButtonName='Войти'
      isOpen={props.isOpen}
      onClose={props.onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      redirectTo={props.redirectTo}
    >

      <PopupInput
        name='email'
        minLength='6'
        maxLength='30'
        id='inputEmail'
        placeholder='Введите почту'
        onChange={handleChange}
        errorText={errors.email}
        label='Email'
      />

      <PopupInput
        name='password'
        minLength='8'
        maxLength='30'
        id='inputPassword'
        placeholder='Введите пароль'
        onChange={handleChange}
        errorText={errors.password}
        label='Пароль'
      />

<PopupInput
        name='name'
        minLength='2'
        maxLength='30'
        id='inputName'
        placeholder='Введите своё имя'
        onChange={handleChange}
        errorText={errors.name}
        label='Имя'
      />

    </PopupWithFrom>
  );
};

export default RegisterPopup;
