import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import About from '../About/About';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import SuccessPopup from '../SuccessPopup/SuccessPopup';


function App() {

  const history = useHistory();

  // переменные состояний видимости попапов
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(true);

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

  return (
    <div className='root'>

      <Header
      loggedIn={loggedIn}
      logout={logout}
      redirectTo={redirectToLogin}
      />
      <Switch>
        <Route exact path='/'>
          <Main />
          <NotFound />
          <Preloader />
          <About />
          <NewsCardList />
        </Route>

        <Route path='/saved-news'>
          <SavedNewsHeader />
          <SavedNews />

        </Route>

      </Switch>

      <Footer />

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        redirectTo={redirectToRegister}
      />

      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        redirectTo={redirectToLogin}
      />

      <SuccessPopup
        isOpen={isSuccessPopupOpen}
        onClose={closeAllPopups}
        redirectTo={redirectToLogin}
      />

    </div>
  );
};

export default App;
