import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
import View from '../components/layout/View';
import FavoritesListItem from '../components/favorites/FavoritesListItem';

const FavoritesPage = () => {
  const { state } = useContext(AppContext);

  return (
    <View>
      <h2>My Favorite Cities</h2>
      <div className="favorites-list">
        {state.favorites.map((favoriteCity) => (
          <FavoritesListItem
            key={favoriteCity._id}
            favoriteCity={favoriteCity}
          />
        ))}
      </div>
    </View>
  );
};

export default FavoritesPage;
