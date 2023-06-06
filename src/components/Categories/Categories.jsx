import React from "react";
import './style.css';
import Banner from '../Banner/Banner.jsx';

const Categories = () => {
    return(
        <>
        <Banner />
        <div className="categories">
            <div className="category" id="appliances">Appliances</div>
            <div className="category" id="electronics">Electronics</div>
            <div className="category" id="car">Car</div>
            <div className="category" id="wallet">Wallet</div>
            <div className="category" id="others">Others</div>
        </div>
        </>
    )
}

export default Categories;