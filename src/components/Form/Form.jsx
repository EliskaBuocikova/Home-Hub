import React from 'react';
import './style.css';
import pdficon from '../../img/icon-pdf.png';

const Form = () => {
  return (
    <>
      <div className="formcontainer">
        <form className="boxForm">
          <h2>New item</h2>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="date of purchase" />
          <input type="text" placeholder="reminder date" />
          <input type="text" placeholder="note" />
          <img src={pdficon} alt="add-pdf" />
          <button className="">add item</button>
        </form>
      </div>
      ;
    </>
  );
};

export default Form;
