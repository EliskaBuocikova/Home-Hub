import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import attachmentIcon from '../../img/attachment-icon.svg';
import './style.css';
import {
  deleteItem,
  fetchItem,
  insertItem,
  updateItem,
} from '../../apiFunctions/formItem';

const Form = ({ onItemUpdated, categoryId, itemId }) => {
  const [name, setName] = useState('');
  const [dateOfPurchase, setDateOfPurchase] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [note, setNote] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (itemId === undefined) {
      return;
    }
    fetchItem(itemId).then((item) => {
      setName(item.name);
      setDateOfPurchase(item.dateOfPurchase);
      setReminderDate(item.reminderDate);
      setNote(item.note);
    });
  }, []);

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
      reminderDate: reminderDate,
      note: note,
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

      <div className={`modal ${modalIsOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <p>{`
          Do you really want to delete the item ${name}?`}</p>
          <button onClick={closeModal}>cancel</button>
          <button onClick={handleDelete}>delete</button>
        </div>
      </div>
    </>
  );
};

export default Form;
