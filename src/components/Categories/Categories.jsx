import React from 'react';
import './style.css';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import appliancesIcon from '../../img/appliances-icon-T.png';
import electronicsIcon from '../../img/electronics-icon-T.png';
import carIcon from '../../img/car-icon-T.png';
import walletIcon from '../../img/wallet-icon-T.png';
import othersIcon from '../../img/others-icon-T.png';

const Categories = () => {
  return (
    <>
      <Banner />
      <PageName title={'Categories'} />
      <div className="categories">
        <div className="category" id="appliances">
          <img
            className="icon__appliances"
            src={appliancesIcon}
            alt="appliances_icon"
          ></img>
          Appliances
        </div>

        <div className="category" id="electronics">
          <img
            className="icon__electronics"
            src={electronicsIcon}
            alt="electronics_icon"
          ></img>
          Electronics
        </div>

        <div className="category" id="car">
          <img className="icon__car" src={carIcon} alt="car_icon"></img>
          Car
        </div>

        <div className="category" id="wallet">
          <img
            className="icon__wallet"
            src={walletIcon}
            alt="wallet_icon"
          ></img>
          Wallet
        </div>

        <div className="category" id="others">
          <img
            className="icon__others"
            src={othersIcon}
            alt="others_icon"
          ></img>
          Others
        </div>
      </div>
    </>
  );
};

export default Categories;
