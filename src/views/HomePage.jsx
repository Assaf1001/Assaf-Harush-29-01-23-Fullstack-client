import Search from '../components/search/Search';
import View from '../components/layout/View';
import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
import { addToFavorites } from '../server/user';
import { addToFavoritesAction } from '../actions/appActions';
import { useState } from 'react';
import Modal from '../components/layout/Modal';

const HomePage = () => {
  const { state, dispatch } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);

  const onClickAddToFavorites = async () => {
    const isExist = state.favorites.find(
      (city) => city._id === state.activeCity._id
    );
    if (isExist) {
      setModalMessage(
        `The city ${state.activeCity.name} is already in favorites`
      );
      setShowModal(true);
      return;
    }

    try {
      await addToFavorites(state.userId, state.activeCity._id);
      dispatch(addToFavoritesAction(state.activeCity));
      setModalMessage(
        `The city ${state.activeCity.name} has added to favorites`
      );
      setShowModal(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      {showModal && (
        <Modal text={modalMessage} onClickClose={() => setShowModal(false)} />
      )}
      <div>
        <h2>Please enter a city and press search</h2>
        <Search />
      </div>
      {state.activeCity && (
        <div>
          <h3>
            The temperature in {state.activeCity.name} is{' '}
            {state.activeCity.temperatureInCelcius}°C
          </h3>
          <button onClick={onClickAddToFavorites}>Add to favorites</button>
        </div>
      )}
    </View>
  );
};

export default HomePage;
