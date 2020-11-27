import React from 'react';

function SavedNewsHeader(props) {
  return (
    <section className='savedNewsHeader'>
      <h3 className='savedNewsHeader__title'>Сохранённые статьи</h3>
      {/* props.userName потом поменять на контекст CurrentUser */}
      <h2 className='savedNewsHeader__subtitle'>{props.userName}, у вас {props.articlesCount} сохранённых статей</h2>
      <h3 className='savedNewsHeader__text'>По ключевым словам:
        <span className='savedNewsHeader__span'>{props.articleFirstKeyword}, {props.articleSecondKeyword}</span> и
        <span className='savedNewsHeader__span'>{props.articleRemainKeywords}</span>
      </h3>
    </section>
  );
};

export default SavedNewsHeader;
