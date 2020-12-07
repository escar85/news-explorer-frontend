import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

function SavedNews(props) {
  return (
    <section className='savedNews'>
      {props.savedArticles.length > 0
      ?
      <ul className='savedNews__articles'>
      {props.savedArticles.map((article) => (
        <NewsCard
          article={article}
          key={article.link}
          onArticleDelete={props.onArticleDelete}
          savedArticles={props.savedArticles}
        />
      ))}
    </ul>
    : <h2 className='savedNews__noArticles'>Все сохранённые статьи будут находиться тут!</h2>
    }
    </section>
  );
};

export default SavedNews;
