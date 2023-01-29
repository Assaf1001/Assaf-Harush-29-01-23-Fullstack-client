import { useContext } from 'react';
import { removeFromFavoritesAction } from '../../actions/appActions';
import { AppContext } from '../../context/AppContextProvider';
import { removeFromFavorites } from '../../server/user';

const FavoritesListItem = ({
  favoriteCity: { name, temperatureInCelcius, _id },
}) => {
  const { state, dispatch } = useContext(AppContext);

  const onClickRemoveFavorite = async () => {
    try {
      await removeFromFavorites(state.userId, _id);
      dispatch(removeFromFavoritesAction(_id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="favorites-list__item">
      <p>{name}</p>
      <p>{temperatureInCelcius}°C</p>
      <button onClick={onClickRemoveFavorite}>Remove</button>
    </div>
  );
};

export default FavoritesListItem;
