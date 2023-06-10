import React, { useState } from 'react';
import PageName from '../PageName/PageName';
import folderIcon from '../../img/folder-icon.svg';
import folderAddIcon from '../../img/folder-add-icon.svg';
import magnifyingGlassIcon from '../../img/magnifying-glass-icon.png';
import { Link } from 'react-router-dom';
import Modal from 'react-modal'; // Importujte Modal z react-modal
import './style.css';

const ItemList = ({ name }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <PageName title={'...Jméno kategorie...'} />
      <div className="item-list">
        <form>
          <input type="text" placeholder="search" />
          <button className="magnifying-glass-icon">
            <img
              className="magnifying-glass-pic"
              src={magnifyingGlassIcon}
              alt="magnifying-glass"
            />
          </button>
        </form>
        <div className="item-list__folders">
          <Link className="item-list__item" to="/itemdetail">
            <img
              className="item-list__folder-pic"
              src={folderIcon}
              alt="folder"
            />
            <p className="item-list__item-name">lednice{name}</p>
          </Link>

          <div className="item-list__item" onClick={openModal}>
            <img
              className="item-list__folder-add-pic"
              src={folderAddIcon}
              alt="folder-add"
            />
          </div>

          <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                width: '300px',
                height: '500px',
                margin: 'auto',
              },
            }}
          >
            <h2>New item</h2>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="date of purchase" />
            <input type="text" placeholder="reminder date" />
            <input type="text" placeholder="note" />
            <button className="button-add-item">add item</button>
            <button className="close" onClick={closeModal}></button>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default ItemList;
