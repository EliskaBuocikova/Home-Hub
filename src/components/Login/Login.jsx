import React from 'react';
import './style.css';
import Banner from '../Banner/Banner';
import logo from '../../img/logo-cele-cerne.png';

const Login = () => {
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
          <p className="login__link">
            Register <a href="#"> HERE</a>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
