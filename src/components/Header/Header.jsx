import React from 'react';
import bannerMobil from '../../img/banner-mobil.png';
import backBanner from '../../img/banner-desktop.png';
import './style.css';
import logoWhite from '../../img/logo-H-bile.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logoWhite} alt="home_icon"></img>
      <div className="header__nav">
        <nav className="nav__categories">Categories</nav>
        <nav className="nav__notifications">Notifications</nav>
      </div>
      <p className="header__login">login</p>
    </header>
  );
};

export default Header;
