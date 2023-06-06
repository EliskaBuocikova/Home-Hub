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
          <Link className="nav__categories" to="/categories">
            Categories
          </Link>
          <span> | </span>
          <Link className="nav__notifications" to="/">
            Notifications
          </Link>
        </nav>
      </div>
      <p className="header__login">login</p>
    </header>
  );
};

export default Header;
