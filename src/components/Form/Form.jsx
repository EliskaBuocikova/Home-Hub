import React from 'react';
import './style.css';
import pdficon from '../../img/icon-pdf.png';

const Form = () => {
  return (
    <>
      <div className="formcontainer">
        <h2>Form</h2>
        <form className="boxForm">
          <h3>New item</h3>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <img src={pdficon} alt="add-pdf" />
          <button className="">add item</button>
        </form>
      </div>
      ;
    </>
  );
};

export default Form;
