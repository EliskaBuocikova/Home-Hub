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

      <div class="homepage__container">
        <h2 class="homepage__datetime">Today is Monday, 12 June 2023</h2>
        <p class="homepage__prompt">What's coming up in the next two months?</p>
      </div>

      <div className="notifications__wrapper">
        <div className="notifications">
          <div class="notification">
            <p class="notification__date">12.3.</p>
            <p class="notification__text">Záruka pračka</p>
            <div class="notification__tick"></div>
          </div>
          <div class="notification">
            <p class="notification__date">12.3.</p>
            <p class="notification__text">Záruka pračka</p>
            <div class="notification__tick"></div>
          </div>
          <div class="notification">
            <p class="notification__date">12.3.</p>
            <p class="notification__text">Záruka pračka</p>
            <div class="notification__tick"></div>
          </div>
          <div class="notification">
            <p class="notification__date">12.3.</p>
            <p class="notification__text">Záruka pračka</p>
            <div class="notification__tick"></div>
          </div>
          <div class="notification">
            <p class="notification__date">12.3.</p>
            <p class="notification__text">Záruka pračka</p>
            <div class="notification__tick"></div>
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
