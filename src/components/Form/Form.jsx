import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  deleteItem,
  fetchItem,
  insertItem,
  updateItem,
} from '../../apiFunctions/formItem';
import dayjs from 'dayjs';
import './style.css';

const Form = ({ onItemUpdated, categoryId, itemId }) => {
  const [name, setName] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState(
    dayjs().format('YYYY-MM-DDTHH:mm'),
  );
  const [dueDate, setDueDate] = useState(dayjs().format('YYYY-MM-DDTHH:mm'));
  const [reminderNote, setReminderNote] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (itemId === undefined) {
      return;
    }
    fetchItem(itemId).then((item) => {
      setName(item.name);
      setDateOfPurchase(item.dateOfPurchase);
      setDueDate(item.dueDate);
      setReminderNote(item.reminderNote);
    });
  }, []);

  const handleAddItem = (event) => {
    event.preventDefault();
    console.log('funkce na přídání CELÉ POLOŽKY do datábáze');

    const newItem = {
      name: name,
      dateOfPurchase: dateOfPurchase,
      dueDate: dueDate,
      reminderNote: reminderNote,
      category_id: categoryId,
    };

    insertItem(newItem)
      .then(() => {
        onItemUpdated();
      })
      .catch((error) => {
        console.log('Chyba při vkládání položky do databáze:', error);
      });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = (event) => {
    deleteItem(itemId).then(() => {
      onItemUpdated();
    });
    event.preventDefault();
  };

  const saveUpdateItem = () => {
    const updatedItem = {
      name: name,
      dateOfPurchase: dateOfPurchase,
      dueDate: dueDate,
      reminderNote: reminderNote,
      category_id: categoryId,
    };

    updateItem(itemId, updatedItem).then(() => {
      onItemUpdated();
    });
  };

  return (
    <>
      <div className="formcontainer">
        <form className="boxForm">
          {itemId === undefined ? <h2>New item</h2> : name}
          <input
            type="text"
            placeholder="name"
            maxLength={30}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="datetime-local"
            type="datetime-local"
            placeholder="date of purchase"
            value={dateOfPurchase}
            onChange={(event) => setDateOfPurchase(event.target.value)}
          />

          <input
            className="datetime-local"
            type="datetime-local"
            placeholder="reminder date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />

          <input
            type="text"
            placeholder="reminder note"
            maxLength={35}
            value={reminderNote}
            onChange={(event) => setReminderNote(event.target.value)}
          />
          {itemId === undefined ? (
            <button
              type="button"
              onClick={handleAddItem}
              className="button-add-item"
            >
              add item
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={saveUpdateItem}
                className="button-save"
              >
                save
              </button>
              <button
                type="button"
                onClick={openModal}
                className="button-delete"
              >
                delete
              </button>
            </>
          )}
        </form>{' '}
      </div>

      <div
        className={`confirm-window ${modalIsOpen ? 'confirm-window-open' : ''}`}
      >
        <div className="modal-box">
          <p className="modal-question">
            {`
          Do you really want to delete the item`}{' '}
            <span className="deleted_item">{name}</span>
            {`?`}
          </p>
          <button onClick={closeModal} className="modal-cancel">
            cancel
          </button>
          <button onClick={handleDelete} className="modal-delete">
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
