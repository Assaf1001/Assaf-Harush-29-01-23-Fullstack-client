import { useReducer } from 'react';
import { createContext } from 'react';
import appReducer, { appInitalState } from '../reducers/appReducer';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appInitalState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
