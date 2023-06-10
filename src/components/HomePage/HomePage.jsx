import React from 'react';
import { useEffect, useState } from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import { Link } from 'react-router-dom';
import './style.css';


const HomePage = () => {

  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Prague");
        const data = await response.json();
        setDateTime(data.datetime.slice(0, 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Banner />
      <PageName title={'Reminders'} />
      
      <div className="homepage__container">
        <h2 className="homepage__datetime">Today is {dateTime}</h2>
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
