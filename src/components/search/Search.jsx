import { useContext, useState } from 'react';
import { setActiveCityAction } from '../../actions/appActions';
import { AppContext } from '../../context/AppContextProvider';
import { getAutocomplete, getCity } from '../../server/weather';
import SearchItem from './SearchItem';

const Search = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const { dispatch } = useContext(AppContext);

  const onInputAutocomplete = async (e) => {
    const value = e.target.value.trim();
    if (value.length === 0) {
      setCities([]);
      setShowDropdown(false);
      return;
    }
    setShowDropdown(true);

    try {
      const res = await getAutocomplete(value);
      setCities(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onClickSelectCity = (city) => {
    setSelectedCity(city);
    setSearchValue(city.name);
    setShowDropdown(false);
  };

  const onClickSearch = async () => {
    const res = await getCity(selectedCity);
    setShowDropdown(false);
    dispatch(setActiveCityAction(res));
  };

  return (
    <div className="search">
      <input
        onInput={onInputAutocomplete}
        onChange={(e) => setSearchValue(e.target.value.trim())}
        value={searchValue}
      />
      {showDropdown && (
        <div className="results-container">
          {cities.map((city) => (
            <SearchItem
              key={city.key}
              city={city}
              onClick={onClickSelectCity}
            />
          ))}
        </div>
      )}
      <button onClick={onClickSearch}>Search</button>
    </div>
  );
};

export default Search;
