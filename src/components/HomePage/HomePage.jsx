import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import { Link } from 'react-router-dom';
import './style.css';

const HomePage = () => {
  return (
    <>
      <Banner />
      <PageName title={'Reminders'} />

      <div className="homepage__container">
        <h2 className="homepage__datetime">Today is Monday, 12 June 2023</h2>
        <p className="homepage__prompt">What's coming up in the next two months?</p>
      </div>

      <div className="notifications__wrapper">
        <div className="notifications">
          <div className="notification">
            <p className="notification__date">12.3.</p>
            <p className="notification__text">Záruka pračka</p>
            <div className="notification__tick"></div>
          </div>
          <div className="notification">
            <p className="notification__date">12.3.</p>
            <p className="notification__text">Záruka pračka</p>
            <div className="notification__tick"></div>
          </div>
          <div className="notification">
            <p className="notification__date">12.3.</p>
            <p className="notification__text">Záruka pračka</p>
            <div className="notification__tick"></div>
          </div>
          <div className="notification">
            <p className="notification__date">12.3.</p>
            <p className="notification__text">Záruka pračka</p>
            <div className="notification__tick"></div>
          </div>
          <div className="notification">
            <p className="notification__date">12.3.</p>
            <p className="notification__text">Záruka pračka</p>
            <div className="notification__tick"></div>
          </div>
          <Link className="notifications__history" to="/history">
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
