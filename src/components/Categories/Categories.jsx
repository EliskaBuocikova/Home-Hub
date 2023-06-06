import React from "react";
import './style.css';
import Banner from '../Banner/Banner.jsx';
import appliancesIcon from '../../img/appliances-icon.png';
import electronicsIcon from '../../img/electronics-icon.png';
import carIcon from '../../img/car-icon.png';
import walletIcon from '../../img/wallet-icon.png';
import othersIcon from '../../img/others-icon.png';

const Categories = () => {
    return(
        <>
            <Banner />

            <div className="categories">

                <div className="category" id="appliances">
                    <img className="icon__appliances" src={appliancesIcon} alt="appliances_icon"></img>
                    Appliances
                </div>

                <div className="category" id="electronics">
                    <img className="icon__electronics" src={electronicsIcon} alt="electronics_icon"></img>
                    Electronics
                </div>

                <div className="category" id="car">
                    <img className="icon__car" src={carIcon} alt="car_icon"></img>
                    Car
                </div>

                <div className="category" id="wallet">
                    <img className="icon__wallet" src={walletIcon} alt="wallet_icon"></img>
                    Wallet
                </div>

                <div className="category" id="others">
                    <img className="icon__others" src={othersIcon} alt="others_icon"></img>
                    Others
                </div>
            </div>

        </> 
    )
}

export default Categories;