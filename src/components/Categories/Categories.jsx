import React from 'react';
import './style.css';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import appliancesIcon from '../../img/appliances-icon-T.png';
import electronicsIcon from '../../img/electronics-icon-T.png';
import carIcon from '../../img/car-icon-T.png';
import walletIcon from '../../img/wallet-icon-T.png';
import othersIcon from '../../img/others-icon-T.png';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <>
      <Banner />
      <PageName title={'Categories'} />
        <div className="categories">
          <Link className="category" id="appliances" to="/itemlist">
            <img
              className="icon__appliances"
              src={appliancesIcon}
              alt="appliances_icon"
            ></img>
            Appliances
          </Link>

          <Link className="category" id="electronics" to="/itemlist">
            <img
              className="icon__electronics"
              src={electronicsIcon}
              alt="electronics_icon"
            ></img>
            Electronics
          </Link>

          <Link className="category" id="car" to="/itemlist">
            <img className="icon__car" src={carIcon} alt="car_icon"></img>
            Car
          </Link>

          <Link className="category" id="wallet" to="/itemlist">
            <img
              className="icon__wallet"
              src={walletIcon}
              alt="wallet_icon"
            ></img>
            Wallet
          </Link>

          <Link className="category" id="others" to="/itemlist">
            <img
              className="icon__others"
              src={othersIcon}
              alt="others_icon"
            ></img>
            Others
          </Link>
        </div>
    </>
  );
};

export default Categories;
