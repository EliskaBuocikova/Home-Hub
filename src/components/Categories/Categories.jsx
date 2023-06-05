import React from "react";
import './style.css';

const Categories = () => {
    return(
        <main className="main__categories">
            <div className="categories">
                
                <div className="category" id="appliances">Appliances</div>
                <div className="category" id="electronics">Electronics</div>
                <div className="category" id="car">Car</div>
                <div className="category" id="wallet">Wallet</div>
                <div className="category" id="others">Others</div>
            </div>
        </main>

    )
}

export default Categories;