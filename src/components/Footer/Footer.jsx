import React from "react";
import './style.css';

const Footer = () => {
    return(
        <footer className="footer">
            <img className="icon__home" src="../img/home-icon.png" alt="home_icon"></img>
            <img className="icon__notifications" src="../img/notifications-icon.png" alt="notifications_icon"></img>
            <p className="footer__text">Czechitas, Digitální akademie: Web - jaro 2023</p>
        </footer>
    )
}

export default Footer;