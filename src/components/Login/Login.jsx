import React from 'react';
import './style.css';
import Banner from '../Banner/Banner';
import logo from '../../img/logo-cele-cerne.png';
import { useState } from 'react';

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleClickRegister = () => {
    setShowRegister(true);
  };

  return (
    <>
      <Banner />
      <div className="login">
        <div className="login__logo">
          <img className="login__logo" src={logo} />
        </div>
        <p className="login__text">
          Aplikace umožňuje uživatelům mít provoz své domácnosti snadno pod
          kontrolou.
        </p>
        <form className="login__form">
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />
          <button className="login__button">log in</button>
        </form>
        <footer>
          <p className="login__question">Don't have an account?</p>
          {!showRegister && (
            <p className="login__link" onClick={handleClickRegister}>
              Register{' '}
              <a className="register" href="#">
                {' '}
                HERE
              </a>
            </p>
          )}
        </footer>
        {showRegister && (
          <form className="registration__form">
            <input type="text" placeholder="user name" />
            <input type="text" placeholder="password" />
            <button className="registration__button">Register</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Login;
