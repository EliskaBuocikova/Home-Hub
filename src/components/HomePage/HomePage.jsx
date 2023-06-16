import React from 'react';
import { useEffect, useState } from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import { Link } from 'react-router-dom';
import { fetchReminders } from '../../apiFunctions/formItem';
import Reminder from '../Reminder/Reminder';
import dayjs from 'dayjs';
import './style.css';

const Today = dayjs();

const HomePage = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    fetchReminders(Today).then(setReminders);
  }, []);

  const handleReminderChecked = () => {
    setTimeout(() => {
      fetchReminders(Today).then(setReminders);
    }, 500);
  };

  return (
    <>
      <Banner />
      <div className="homepage__wrapper">
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
            {reminders.length === 0 ? (
              <p className="notifications__message">
                Your schedule is clear for the next two months.
              </p>
            ) : (
              reminders.map((reminder) => (
                <Reminder
                  key={reminder.id}
                  reminder={reminder}
                  onReminderChecked={handleReminderChecked}
                />
              ))
            )}
            <Link className="notifications__history" to="/history">
              History
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
