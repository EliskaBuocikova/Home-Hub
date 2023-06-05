import React from 'react';
import './style.css';
import homeIcon from '../../img/home-icon.png';
import notificationsIcon from '../../img/notifications-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="icon__home" src={homeIcon} alt="home_icon"></img>
      <img
        className="icon__notifications"
        src={notificationsIcon}
        alt="notifications_icon"
      ></img>
      <p className="footer__text">
        Czechitas, Digitální akademie: Web - jaro 2023
      </p>
    </footer>
  );
};

export default Footer;
