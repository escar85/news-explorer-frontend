import React from 'react';

import SavedNews from '../SavedNews/SavedNews';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {

  const [firstWord, setFirstWord] = React.useState('');
  const [secondWord, setSecondWord] = React.useState('');
  const [thirdWord, setThirdWord] = React.useState('');
  const [lastWords, setLastWords] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  const keywordsCount = props.savedArticles.reduce(function (acc, el) {
    acc[el.keyword] = (acc[el.keyword] || 0) + 1;
    return acc;
  }, {});

  const keysSorted = Object.keys(keywordsCount).sort(function (a, b) { return keywordsCount[b] - keywordsCount[a] })

  React.useEffect(() => {
    if (keysSorted.length === 1) {
      setFirstWord(keysSorted[0])
    } else if (keysSorted.length === 2) {
      setFirstWord(keysSorted[0])
      setSecondWord(keysSorted[1])
    } else if (keysSorted.length === 3) {
      setFirstWord(keysSorted[0])
      setSecondWord(keysSorted[1])
      setThirdWord(keysSorted[2])
    } else {
      setFirstWord(keysSorted[0])
      setSecondWord(keysSorted[1])
      setLastWords(keysSorted.length - 2)
    }
  }, [keysSorted])

  return (
    <>
      <section className='savedNewsHeader'>
        <h3 className='savedNewsHeader__title'>Сохранённые статьи</h3>
        <h2 className='savedNewsHeader__subtitle'>{currentUser.name}, у вас {props.savedArticles.length} сохранённых статей</h2>
        <h3 className='savedNewsHeader__text'>По ключевым словам:
        {keysSorted.length === 1
            ? <span className='savedNewsHeader__span'> {firstWord} </span>
            : ''}
        {keysSorted.length === 2
        ? <span className='savedNewsHeader__span'> {firstWord}, {secondWord} </span>
        : ''}
        {keysSorted.length === 3
        ? <span className='savedNewsHeader__span'> {firstWord}, {secondWord} и {thirdWord}</span>
        : ''}
        {keysSorted.length > 3
        ? <span className='savedNewsHeader__span'> {firstWord}, {secondWord} и {lastWords}-м другим</span>
        : ''}
        </h3>
      </section>
      <SavedNews
        savedArticles={props.savedArticles}
        onArticleDelete={props.onArticleDelete}
      />
    </>
  );
};

export default SavedNewsHeader;
