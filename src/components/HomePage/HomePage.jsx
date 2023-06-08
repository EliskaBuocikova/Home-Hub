import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import './style.css';

const HomePage = () => {
  return (
    <>
      <Banner />
      <PageName title={'Homepage'} />
      
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
                        <div class="notifications__history">History</div>
                    </div>
                    </div>
    </>
  );
};

export default HomePage;
