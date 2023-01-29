export const appInitalState = {
  userId: null,
  activeCity: null,
  favorites: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return { ...state, userId: action.userId };
    case 'SET_USER_FAVORITES':
      return { ...state, favorites: action.favorites };
    case 'SET_ACTIVE_CITY':
      return {
        ...state,
        activeCity: action.city,
      };
    case 'ADD_TO_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.city] };
    case 'REAMOVE_FROM_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((city) => city._id !== action.id),
      };
    default:
      return state;
  }
};

export default appReducer;
