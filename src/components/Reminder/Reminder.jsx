import React from 'react';
import { useState } from 'react';
import { updateItem } from '../../apiFunctions/formItem';
import { checkReminder } from '../../apiFunctions/formItem';
import dayjs from 'dayjs';

const Reminder = ({ reminder, onReminderChecked }) => {
  const [isChecked, setIsChecked] = useState(reminder.checked);

  const handleChecked = () => {
    setIsChecked(!isChecked);
    checkReminder(reminder.id).then(() => {
      onReminderChecked();
    });
  };
  const date = dayjs(reminder.items.dueDate);
  return (
    <div className="notification">
      <p className="notification__date">{date.format('MMMM DD, YYYY')}</p>
      <p className="notification__text">{reminder.items.reminderNote}</p>
      <div
        className={`notification__tick-${isChecked ? 'show' : 'hide'}`}
        onClick={handleChecked}
      ></div>
    </div>
  );
};
export default Reminder;
