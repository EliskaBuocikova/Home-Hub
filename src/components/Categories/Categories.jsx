import React from "react";
import './style.css';

const Categories = () => {
    return(
        <>
            <div className="banner">
                <div className="banner__img"></div>
                <div className="banner__bar">
                    <p className="bar__text">Categories</p>
                </div>
            </div>

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