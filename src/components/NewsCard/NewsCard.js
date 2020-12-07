import React from 'react';
import { useLocation } from 'react-router-dom';
import defaultImg from '../../images/1.jpg';

function NewsCard(props) {

  const url = useLocation();

  const isSaved = props.savedArticles.some(i => i.link === props.article.link);

  const newsCardSaveButtonClassName = `newsCard__save-button ${isSaved ? 'newsCard__save-button_checked' : ''}  ${props.loggedIn ? '' : 'newsCard__save-button-tooltip'}`;

  const saveButtonAttribute = (
    props.loggedIn
      ? false
      : true
  )

  function handleDeleteClick(e) {
    props.onArticleDelete(props.article);
  }

  function handleSaveClick(e) {
    props.onArticleSave(props.article, props.article.keyword);
  }

  return (
    <li  className="newsCard">
      <img alt={props.article.keyword} className="newsCard__image" src={props.article.image || defaultImg} />
      { url.pathname === '/saved-news' ?
        <>
          <div className='newsCard__keyword'>{props.article.keyword}</div>
          <button type="button" aria-label="delete" className='newsCard__delete-button' onClick={handleDeleteClick}></button>
        </>
        :
        <button type="button" aria-label="saveCard" disabled={saveButtonAttribute} className={newsCardSaveButtonClassName} onClick={handleSaveClick}></button>
      }

      <a href={props.article.link} target='blank' className="newsCard__info">
        <h3 className="newsCard__date">{props.article.date}</h3>
        <h2 className="newsCard__title">{props.article.title}</h2>
        <p className="newsCard__text">{props.article.text}</p>
        <span className="newsCard__source">{props.article.source || 'Без указания источника'}</span>
      </a>
    </li>
  );
};

export default NewsCard;
