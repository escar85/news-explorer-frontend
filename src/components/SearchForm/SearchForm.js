import React from 'react';

function SearchForm(props) {
  return (
    <section className='search-form'>
      <form name='searchForm' onSubmit={props.onSubmit} method="post" action="#" className="search-form__container" id={props.name} noValidate>
        <input
          type="text"
          name="searchInput"
          required
          minLength="2"
          maxLength="200"
          className="search-form__input"
          id="input"
          placeholder='Введите тему новости'
        />
        <button type="submit" className="search-form__submit-button">Искать</button>
      </form>
    </section>
  );
};

export default SearchForm;
