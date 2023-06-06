import React from 'react';
import bannerMobil from '../../img/banner-mobil.png';
import backBanner from '../../img/banner-desktop.png';
import './style.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">HH</h1>
        <div className="header__nav">
          <nav className="nav__categories">Categories</nav>
          <nav className="nav__notifications">Notifications</nav>
        </div>
        <p className="header__login">login</p>
      </header>
      <img className="ban__mobil" src={bannerMobil} alt="" />
      <img className="back__image" src={backBanner} alt="" />
    </>
  );
};

export default Header;
