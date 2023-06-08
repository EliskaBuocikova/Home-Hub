import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import './style.css';

const HomePage = () => {
  return (
    <>
      <Banner />
      <PageName title={'Homepage'} />
    </>
  );
};

export default HomePage;
