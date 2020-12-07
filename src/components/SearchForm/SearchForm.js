import React from 'react';
import { useForm } from '../../utils/Validation';

function SearchForm(props) {

  const { values, handleChange } = useForm();
  const [placeholder, setPlaceholder] = React.useState('Введите тему новости');
  const [inputClassName, setInputClassName] = React.useState('search-form__input')

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.searchInput) {
      setPlaceholder('Нужно ввести ключевое слово')
      setInputClassName('search-form__input_error')
    } else {
      setPlaceholder('OK')
      props.onSearch(values.searchInput)
      props.setWord(values.searchInput)
      localStorage.setItem('keyword', values.searchInput)
    }
  }

  return (
    <section className='search-form'>
      <form name='searchForm' onSubmit={handleSubmit} method="post" action="#" className="search-form__container" id={props.name} noValidate>
        <input
          type="text"
          name="searchInput"
          required
          minLength="2"
          maxLength="200"
          className={inputClassName}
          id="input"
          placeholder={placeholder}
          onChange={handleChange}
        />
        <button type="submit" className="search-form__submit-button">Искать</button>
      </form>
    </section>
  );
};

export default SearchForm;
