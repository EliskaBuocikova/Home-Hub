import React from 'react';
import { useEffect, useState } from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import { Link } from 'react-router-dom';
import './style.css';


const HomePage = () => {

  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Prague");
        const data = await response.json();
        const dateString = new Date(data.datetime.slice(0, 10));
        const options = {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        };
        const formattedDate = dateString.toLocaleDateString('en-US', options);
        setDate(formattedDate);
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
        <h2 className="homepage__date">Today is {date}</h2>
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
