import React, { useCallback } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';
import newsApi from '../../utils/NewsApi';
import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {

  const history = useHistory();

  // переменные состояний видимости попапов
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(localStorage.loggedIn);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [newsApiError, setNewsApiError] = React.useState(false);
  const [searchWord, setSearchWord] = React.useState('');



  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsSuccessPopupOpen(false);
  }

  // эффект для закрытия попапов кликом на оверлей или по нажатию клавиши "ESC"
  React.useEffect(() => {
    function handleCloseByOverlayClickAndPressEscape(e) {
      if (e.key === 'Escape' || e.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleCloseByOverlayClickAndPressEscape);
    document.addEventListener('keydown', handleCloseByOverlayClickAndPressEscape);

    return () => {
      document.removeEventListener('click', handleCloseByOverlayClickAndPressEscape);
      document.removeEventListener('keydown', handleCloseByOverlayClickAndPressEscape);
    }
  })

  function redirectToLogin() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  function redirectToRegister() {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
  }

  function logout() {
    history.push('/');
  }

  function getArticles(keyword) {
    setIsLoading(true)
    newsApi.getArticles(keyword)
      .then((res) => {
        res.totalResults === 0
          ? setIsNotFound(true)
          : setIsNotFound(false)
        localStorage.setItem('articles', JSON.stringify(res.articles))
        setArticles(res.articles)
      })
      .catch((err) => {
        setNewsApiError(true);
      })
      .finally(
        setIsLoading(false)
      )
  }

  function onRegister(authData) {
    mainApi.registerUser(authData)
      .then((res) => {
        if (res) {
          closeAllPopups();
          setIsSuccessPopupOpen(true);
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function onLogin(authData) {
    mainApi.loginUser(authData)
      .then((data) => {
        if (data) {
          tokenCheck();
          localStorage.setItem('loggedIn', true)
          setLoggedIn(true);
          closeAllPopups();
          return data.token;
        }
        throw new Error('Ошибка авторизации');
      })
      .catch(err => {
        console.log(err);
      })
  }

  //обработчик выхода пользователя
  function onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('articles');
    localStorage.removeItem('keyword');
    setLoggedIn(localStorage.removeItem('loggedIn'));
  }

  function handleArticleSave(article, searchWord) {
    // проверяем сохранена ли статья
    const isSaved = savedArticles.some(i => i.link === article.link);

    isSaved
      ? handleArticleDelete(article)
      : saveArticle(article, searchWord)
  }

  function saveArticle(article, searchWord) {
    mainApi.saveArticle(article, searchWord)
      .then((newArticle) => {
        // Обновляем стейт
        setSavedArticles([...savedArticles, newArticle]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // обработчик удаления карточки
  function handleArticleDelete(article) {
    const deletedArticle = savedArticles.find((a) => a.link === article.link);
    mainApi.deleteArticle(deletedArticle._id)
      .then((article) => {
        const newArticles = savedArticles.filter((a) => a.link !== article.link);
        setSavedArticles(newArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      Promise.all([mainApi.getSavedArticles(token), mainApi.getContent(token)])
        .then(([data, user]) => {
          setSavedArticles(data);
          setCurrentUser(user);
        })
        .then(() => {
          localStorage.setItem('loggedIn', true)
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, [])

  const storage = useCallback(() => {
    const storage = JSON.parse(localStorage.getItem('articles'))
    const keyword = localStorage.getItem('keyword')
    if (storage) {
      setArticles(storage)
    }
    if (keyword) {
      setSearchWord(keyword)
    }
  }, [])

  React.useEffect(() => {
    storage()
  }, [storage])

  return (
    <div className='root'>
      <CurrentUserContext.Provider value={currentUser}>

        <Header
          loggedIn={loggedIn}
          logout={logout}
          redirectTo={redirectToLogin}
          onSignOut={onSignOut}
        />
        <Switch>
          <Route exact path='/'>
            <Main
              onSearch={getArticles}
              setWord={setSearchWord}
            />
            {isNotFound ? <NotFound /> : <></>}
            {isLoading ? <Preloader /> : <></>}
            <NewsCardList
              articles={articles}
              searchError={newsApiError}
              onArticleSave={handleArticleSave}
              loggedIn={loggedIn}
              savedArticles={savedArticles}
              searchWord={searchWord}
            />
            <About />
          </Route>

          <ProtectedRoute
            path='/saved-news'
            loggedIn={loggedIn}
            redirectToLogin={redirectToLogin}
            component={SavedNewsHeader}
            savedArticles={savedArticles}
            onArticleDelete={handleArticleDelete}
          />

        </Switch>

        <Footer />

        <LoginPopup
          isOpen={isLoginPopupOpen}
          onLogin={onLogin}
          onClose={closeAllPopups}
          redirectTo={redirectToRegister}
        />

        <RegisterPopup
          isOpen={isRegisterPopupOpen}
          onRegister={onRegister}
          onClose={closeAllPopups}
          redirectTo={redirectToLogin}
        />

        <SuccessPopup
          isOpen={isSuccessPopupOpen}
          onClose={closeAllPopups}
          redirectTo={redirectToLogin}
        />

      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
