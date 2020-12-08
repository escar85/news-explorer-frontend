import React from 'react';

import NewsCard from '../NewsCard/NewsCard';



function NewsCardList(props) {

  const [index, setIndex] = React.useState(3);
  const [renderedArticles, setRenderedArticles] = React.useState(props.articles.slice(0, 3))

  function showMore() {
    const arr = props.articles.slice(index, index + 3);
    setIndex(index + 3);
    setRenderedArticles([...renderedArticles, ...arr]);
  }

  React.useEffect(() => {
    setRenderedArticles(props.articles.slice(0, 3))
  }, [props.articles])

  return (
    <>
      { props.articles.length > 0
        ?
        <section className='newsCardList'>
          <h3 className='newsCardList__title'>Результаты поиска</h3>
          <ul className='newsCardList__articles'>
            {renderedArticles.map(({ description, publishedAt, urlToImage, title, author, url }) => (
              <NewsCard
                article={{ text: description, date: publishedAt.substring(0, 10), image: urlToImage, title: title, source: author, link: url, keyword: props.searchWord }}
                key={url}
                onArticleSave={props.onArticleSave}
                loggedIn={props.loggedIn}
                savedArticles={props.savedArticles}
                keyWord={props.searchWord}
              />
            ))}
          </ul>
          {props.articles.length > 2 && !(renderedArticles.length === props.articles.length)
            ? <button type="button" aria-label="showMore" onClick={showMore} className="newsCardList__showMore-button">Показать ещё</button>
            : ''
          }
        </section>
        : ''
      }
      {props.searchError
        ?
        <section className='newsCardList'>
          <h3 className='newsCardList__title'>Результаты поиска</h3>
          <span className='newsCardList__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
        </section>
        : ''
      }
    </>
  );
};

export default NewsCardList;




    // <section className='newsCardList'>
    //   <h3 className='newsCardList__title'>Результаты поиска</h3>
    //   <ul className='newsCardList__articles'>
    //     {props.articles.map((item) => (
    //       <NewsCard
    //         article={item}
    //         key={item.url}
    //         onArticleDelete={props.onArticleDelete}
    //         onArticleSave={props.onArticleSave}
    //       />
    //     ))}
    //   </ul>
    //   {props.articles.length > 2
    //     ? <button type="button" aria-label="showMore" className="newsCardList__showMore-button">Показать ещё</button>
    //     : ''
    //   }

    // </section>
