import React from 'react';
import './style.css';
import logo from '../../img/logo-cele-cerne.svg';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
// import { useState } from 'react';

const Login = () => {
  // const [showRegister, setShowRegister] = useState(false);

  // const handleClickRegister = () => {
  //   setShowRegister(true);
  // };

  return (
    <>
      <div className="login">
        <div className="login__logo">
          <img className="login__logo" src={logo} />
        </div>
        <p className="login__text">seamless living</p>
        <form className="login__form">
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="password" />

          <Link className="login__button" to="/">
            log in
          </Link>
        </form>
        <footer>
          <p className="login__question">Don't have an account?</p>
          {/* {!showRegister && ( */}
          <p
            className="login__link"

            // onClick={handleClickRegister}
          >
            Register{' '}
            <a className="register" href="#">
              {' '}
              HERE
            </a>
          </p>
          {/* )} */}
        </footer>
        {/* {showRegister && (
          <form className="registration__form">
            <input type="text" placeholder="user name" />
            <input type="text" placeholder="password" />
            <button className="registration__button">Register</button>
          </form>
        )} */}
      </div>
    </>
  );
};

export default Login;
