import React from 'react';
import { useEffect, useState } from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import { Link } from 'react-router-dom';
import './style.css';
import { fetchReminders } from '../../apiFunctions/formItem';
import Reminder from '../Reminder/Reminder';
import dayjs from 'dayjs';

const Today = dayjs();

const HomePage = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetchReminders(Today).then(setReminders);
  }, []);

  const handleReminderChecked = () => {
    setTimeout(() => {
      fetchReminders().then(setReminders);
    }, 500);
  };

  return (
    <>
      <Banner />
      <PageName title={'Reminders'} />

      <div className="homepage__container">
        <h2 className="homepage__date">
          Today is {Today.format('MMMM DD, YYYY')}
        </h2>
        <p className="homepage__prompt">
          What's coming up in the next two months?
        </p>
      </div>
      <div className="notifications__wrapper">
        <div className="notifications">
          {reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              reminder={reminder}
              onReminderChecked={handleReminderChecked}
            />
          ))}
          <Link className="notifications__history" to="/history">
            History
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
