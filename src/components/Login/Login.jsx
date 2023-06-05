import React from 'react';
import './style.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login__logo"></div>
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
        <p>Don't have an account?</p>
        <p>
          Register <a href="#"> HERE</a>
        </p>
      </footer>
    </div>
  );
};

export default Login;
