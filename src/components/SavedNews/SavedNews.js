import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

function SavedNews(props) {
  return (
    <section className='savedNews'>
      <ul className='savedNews__articles'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </ul>
    </section>
  );
};

export default SavedNews;
