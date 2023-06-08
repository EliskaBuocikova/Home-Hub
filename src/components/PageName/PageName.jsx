import React from 'react';
import './style.css';

const PageName = ({ title }) => {
  return (
    <div className="pageName">
      <h1>{title}</h1>
    </div>
  )
};

export default PageName;
