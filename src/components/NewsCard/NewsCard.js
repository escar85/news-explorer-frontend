import React from 'react';
import { useLocation } from 'react-router-dom';
import image from '../../images/1.jpg';


function NewsCard(props) {

  const url = useLocation();

  const newsCardSaveButtonClassName = `newsCard__save-button ${props.loggedIn ? '' : 'newsCard__save-button-tooltip'}`;

  function handleDeleteClick() {

  }

  function handleSaveClick() {

  }

  return (
    <div className="newsCard">
      <img alt="Природа" className="newsCard__image" src={image} />
      { url.pathname === '/saved-news' ?
        <>
          <div className='newsCard__keyword'>Фотография</div>
          <button type="button" aria-label="delete" className='newsCard__delete-button' onClick={handleDeleteClick}></button>
        </>
        :
        <button type="button" aria-label="saveCard" className={newsCardSaveButtonClassName} onClick={handleSaveClick}></button>
      }

      <div className="newsCard__info">
        <h3 className="newsCard__date">2 августа, 2019</h3>
        <h2 className="newsCard__title">Лесные огоньки: история одной фотографии</h2>
        <p className="newsCard__text">Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы.</p>
        <span className="newsCard__source">Афиша</span>
      </div>
    </div>
  );
};

export default NewsCard;








// Заготовка карточки с подключенным Api
// Сохранение карточки по логике будет похоже на лайк/дизлайк
// // return (
// //   <li className="newsCard">
// //     <img alt={props.article.keyword} className="newsCard__image" src={props.article.image} />
// //           { url.pathname === '/saved-news' ?
// <>
// <div className='newsCard__keyword'>Фотография</div>
// <button type="button" aria-label="delete" className='newsCard__delete-button' onClick={handleDeleteClick}></button>
// </>
// :
// <button type="button" aria-label="saveCard" className={newsCardSaveButtonClassName} onClick={handleSaveClick}></button>
// }
// //     <div className="newsCard__info">
// //       <h3 className="newsCard__date">{props.article.date}asd</h3>
// //       <h2 className="newsCard__title">{props.article.name}</h2>
// //       <p className="newsCard__text">{props.article.text}</p>
// //       <span className="newsCard__source">{props.article.source}</span>
// //     </div>
// //   </li>
// // );
