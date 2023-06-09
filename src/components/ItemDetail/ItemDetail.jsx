import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ItemDetail = ({ name }) => {
  const [dateOfPurchase, setDateOfPurchase] = useState('08/06/23');
  const [reminderDate, setReminderDate] = useState('08/06/25');
  const [note, setNote] = useState('lorem ipsum');
  const [isEditable, setIsEditable] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const Modal = ({ isOpen, onClose, onDelete, name }) => {
    return (
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <p>{`
          Do you really want to delete the item ${name}?`}</p>
          <button onClick={onClose}>cancel</button>
          <button onClick={onDelete}>delete</button>
        </div>
      </div>
    );
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    // Tady bude funkce, která se stane na smazání.
    setModalIsOpen(false);
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
              }`}
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
              }`}
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
              className={`input__note ${isEditable ? 'editable-field' : ''}`}
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
            <button onClick={openModal} className="button-delete">
              delete
            </button>
          )}

          <Modal
            isOpen={modalIsOpen}
            onClose={closeModal}
            onDelete={handleDelete}
            name="název"
          />
        </div>
        <Link to="/itemlist">
          <button className="close"></button>
        </Link>
      </div>
    </>
  );
};

export default ItemDetail;
