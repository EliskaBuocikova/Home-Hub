import React, { useState } from 'react';
import './style.css';

const ItemDetail = ({ name }) => {
  const [dateOfPurchase, setDateOfPurchase] = useState('08/06/23');
  const [reminderDate, setReminderDate] = useState('08/06/25');
  const [note, setNote] = useState('lorem ipsum');
  const [isEditable, setIsEditable] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
    setShouldShake(true);
  };

  return (
    <>
      <div className="item-detail__container">
        <form className="boxForm">
          <h2>Item{name}</h2>

          <label className="item-detail__label">
            Date of purchase:
            <input
              className={`input__date-of-purchase ${
                isEditable ? 'editable-field' : ''
              } ${shouldShake ? 'shake' : ''}`}
              type="text"
              value={dateOfPurchase}
              placeholder="date of purchase"
              disabled={!isEditable}
              onChange={(event) => setDateOfPurchase(event.target.value)}
            />
          </label>

          <label className="item-detail__label">
            Reminder date:
            <input
              className={`input__reminder-date ${
                isEditable ? 'editable-field' : ''
              } ${shouldShake ? 'shake' : ''}`}
              type="text"
              value={reminderDate}
              placeholder="reminder date"
              disabled={!isEditable}
              onChange={(event) => setReminderDate(event.target.value)}
            />
          </label>

          <label className="item-detail__label">
            Note:
            <input
              className={`input__note ${isEditable ? 'editable-field' : ''} ${
                shouldShake ? 'shake' : ''
              }`}
              type="text"
              value={note}
              placeholder="note"
              disabled={!isEditable}
              onChange={(event) => setNote(event.target.value)}
            />
          </label>
        </form>
        <div className="buttons">
          <button onClick={handleEdit} className="button-edit">
            edit
          </button>

          {isEditable ? (
            <button className="button-save">save</button>
          ) : (
            <button className="button-delete">delete</button>
          )}
        </div>
        <button className="close"></button>
      </div>
    </>
  );
};

export default ItemDetail;
