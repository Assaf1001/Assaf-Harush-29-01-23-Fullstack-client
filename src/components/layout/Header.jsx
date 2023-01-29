import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Weather App</h1>
        <div className="header-nav">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'header-nav__item active' : 'header-nav__item'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'header-nav__item active' : 'header-nav__item'
            }
            to="/favorites"
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
