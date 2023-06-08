import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import './style.css';

const History = () => {
  return (
    <>
      <Banner />
      <PageName title={'Homepage'} />
      <div className="historyBox">
        <h2>Moje upomínky</h2>
        <ul>
          <li></li>{' '}
        </ul>
      </div>
    </>
  );
};

export default History;
