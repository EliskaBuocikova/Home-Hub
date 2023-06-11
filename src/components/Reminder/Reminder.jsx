import React from 'react';
import { useState } from 'react';
import { updateItem } from '../../apiFunctions/formItem';
import { checkReminder } from '../../apiFunctions/formItem';

const Reminder = ({ reminder }) => {
  const [isChecked, setIsChecked] = useState(reminder.checked);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    checkReminder(reminder.id);
  };

  return (
    <div className="notification" >
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
