import React from 'react';
import './style.css';
import logoWhite from '../../img/logo-H-bile.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logoWhite} alt="home_icon"></img>
      <div className="header__nav">
        <nav className="header__menu">
          <Link className="link__ nav__notifications" to="/">
            Notifications
          </Link>
          <span> | </span>
          <Link className="nav__categories" to="/categories">
            Categories
          </Link>
        </nav>
      </div>
      <Link className="header__login" to="/login">
        login
      </Link>
    </header>
  );
};

export default Header;
