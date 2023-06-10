import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import attachmentIcon from '../../img/attachment-icon.svg';
import './style.css';
import { insertItem } from '../../apiFunctions/formItem';

const Form = () => {
  const [name, setName] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [note, setNote] = useState('');

  const handleAddAttachment = () => {
    console.log('funkce na přidání PŘÍLOHY');
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    console.log('funkce na přídání CELÉ POLOŽKY do datábáze');

    const newItem = {
      name: name,
      dateOfPurchase: dateOfPurchase,
      reminderDate: reminderDate,
      note: note,
    };

    insertItem(newItem)
      .then(() => {
        console.log('Položka byla úspěšně vložena do databáze');
      })
      .catch((error) => {
        console.log('Chyba při vkládání položky do databáze:', error);
      });
  };

  return (
    <>
      <div className="formcontainer">
        <form className="boxForm">
          <h2>New item</h2>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="date of purchase"
            value={dateOfPurchase}
            onChange={(event) => setDateOfPurchase(event.target.value)}
          />

          <input
            type="text"
            placeholder="reminder date"
            value={reminderDate}
            onChange={(event) => setReminderDate(event.target.value)}
          />

          <input
            type="text"
            placeholder="note"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <img
            onClick={handleAddAttachment}
            className="attachment-icon"
            src={attachmentIcon}
            alt="add-pdf"
          />
          <button onClick={handleAddItem} className="button-add-item">
            add item
          </button>
        </form>
        <Link to="/category/:categoryId">
          {' '}
          <button className="close"></button>
        </Link>
      </div>
      ;
    </>
  );
};

export default Form;
