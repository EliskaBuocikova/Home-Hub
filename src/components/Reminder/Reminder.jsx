import React from 'react';
import { useState } from 'react';

const Reminder = ({ reminder }) => {
  const [isChecked, setIsChecked] = useState(reminder.checked);

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="notification" key={reminder.id}>
      <p className="notification__date">{reminder.items.reminderDate}</p>
      <p className="notification__text">{reminder.items.note}</p>
      <div
        className={`notification__tick-${isChecked ? 'show' : 'hide'}`}
        onClick={handleChecked}
      ></div>
    </div>
  );
};
export default Reminder;
