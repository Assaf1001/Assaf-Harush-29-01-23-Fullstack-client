export const setUserIdAction = (userId) => ({
  type: 'SET_USER_ID',
  userId,
});

export const setUserFavoritesAction = (favorites) => ({
  type: 'SET_USER_FAVORITES',
  favorites,
});

export const setActiveCityAction = (city) => ({
  type: 'SET_ACTIVE_CITY',
  city,
});

export const addToFavoritesAction = (city) => ({
  type: 'ADD_TO_FAVORITE',
  city,
});

export const removeFromFavoritesAction = (id) => ({
  type: 'REAMOVE_FROM_FAVORITE',
  id,
});
