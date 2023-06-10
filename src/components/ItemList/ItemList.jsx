import React from 'react';
import PageName from '../PageName/PageName';
import folderIcon from '../../img/folder-icon.svg';
import folderAddIcon from '../../img/folder-add-icon.svg';
import magnifyingGlassIcon from '../../img/magnifying-glass-icon.png';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import './style.css';

const ItemList = ({ name }) => {
  return (
    <>
      <Banner />
      <PageName title={'...Jméno kategorie...'} />
      <div className="item-list">
        <form>
          <input type="text" placeholder="search" />
          <button className="magnifying-glass-icon">
            <img className="magnifying-glass-pic" src={magnifyingGlassIcon} />
          </button>
        </form>
        <div className="item-list__folders">
          <Link className="item-list__item" to="/itemdetail">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">lednice{name}</p>
          </Link>

          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">mixér{name}</p>
          </div>
          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">pračka{name}</p>
          </div>
          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">žehlička{name}</p>
          </div>
          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">ledovač{name}</p>
          </div>
          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">nevim{name}</p>
          </div>
          <div className="item-list__item">
            <img className="item-list__folder-pic" src={folderIcon} />
            <p className="item-list__item-name">nevim 2{name}</p>
          </div>

          <Link className="item-list__item" to="/form">
            <img className="item-list__folder-add-pic" src={folderAddIcon} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemList;
