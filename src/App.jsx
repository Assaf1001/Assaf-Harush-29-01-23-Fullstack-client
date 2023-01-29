import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContextProvider';
import FavoritesPage from './views/FavoritesPage';
import HomePage from './views/HomePage';
import NotFoundPage from './views/NotFoundPage';
import Header from './components/layout/Header';
import { useEffect } from 'react';
import { getUserFromCookie, saveUserOnCookie } from './cookies/cookies';
import { useContext } from 'react';
import { setUserFavoritesAction, setUserIdAction } from './actions/appActions';
import { getUser, saveUser } from './server/user';

const App = () => {
  const { dispatch } = useContext(AppContext);

  const getUserData = async () => {
    try {
      let user;
      let userId = getUserFromCookie();
      if (userId) {
        user = await getUser(userId);
      } else {
        saveUserOnCookie();
        userId = getUserFromCookie();
        user = await saveUser(userId);
      }
      dispatch(setUserIdAction(userId));
      dispatch(setUserFavoritesAction(user.favorites));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
