import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <section className='newsCardList'>
      <h3 className='newsCardList__title'>Результаты поиска</h3>
      <ul className='newsCardList__articles'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      </ul>
      <button type="button" aria-label="showMore" className="newsCardList__showMore-button">Показать ещё</button>
    </section>
  );
};

export default NewsCardList;
