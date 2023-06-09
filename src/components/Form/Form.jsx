import React from 'react';
import './style.css';
import attachmentIcon from '../../img/attachment-icon.svg';

const Form = () => {
  const handleAddAttachment = () => {
    console.log('funkce na přidání PŘÍLOHY');
  };

  const handleAddItem = (event) => {
    event.preventDefault();
    console.log('funkce na přídání CELÉ POLOŽKY do datábáze');
  };

  return (
    <>
      <div className="formcontainer">
        <form className="boxForm">
          <h2>New item</h2>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="date of purchase" />
          <input type="text" placeholder="reminder date" />
          <input type="text" placeholder="note" />
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
        <button className="close"></button>
      </div>
      ;
    </>
  );
};

export default Form;
