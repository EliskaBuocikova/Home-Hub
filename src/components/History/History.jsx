import React, { useState } from 'react';
import './style.css';

const History = () => {
  //const [doneNotifications, setDoneNotifications] = useState();

  return (
    <div className="historyBox">
      <h2>Moje upomínky</h2>
      <ul>
        <li>{doneNotifications}</li>{' '}
      </ul>
    </div>
  );
};

export default History;
