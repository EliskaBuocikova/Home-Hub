import React from 'react';
import homeIcon from '../../img/home-icon.png';
import notificationsIcon from '../../img/notifications-icon.png';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="nav__categories" to="/categories">
        <img className="icon__home" src={homeIcon} alt="home_icon"></img>
      </Link>
      <Link className="nav__notifications" to="/">
        <img
          className="icon__notifications"
          src={notificationsIcon}
          alt="notifications_icon"
        ></img>
      </Link>

      <p className="footer__text">
        Czechitas, Digitální akademie: Web - jaro 2023
      </p>
    </footer>
  );
};

export default Footer;
