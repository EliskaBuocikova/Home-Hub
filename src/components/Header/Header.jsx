import React from "react";
import './style.css';

const Header = () => {
    return(
        <header className="header">
            <h1 className="header__logo">HH</h1>
            <div className="header__nav">
                <nav className="nav__categories">Categories</nav>
                <nav className="nav__notifications">Notifications</nav>
            </div>
            <p className="header__login">login</p>
        </header>
    )
}

export default Header