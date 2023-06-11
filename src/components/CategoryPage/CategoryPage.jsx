import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import Form from '../Form/Form';
import folderIcon from '../../img/folder-icon.svg';
import folderAddIcon from '../../img/folder-add-icon.svg';
import magnifyingGlassIcon from '../../img/magnifying-glass-icon.svg';
import { Link } from 'react-router-dom';
import './style.css';
import { fetchCategory } from '../../apiFunctions/formItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal'; // Importujte Modal z react-modal

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentItemId, setCurrentItemId] = useState(undefined);

  useEffect(() => {
    fetchCategory(categoryId).then(setCategory);
  }, []);

  if (category === null) {
    return <div></div>;
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const handleItemUpdated = () => {
    fetchCategory(categoryId).then(setCategory);
    setShowModal(false);
  };

  const handleAddItem = () => {
    setCurrentItemId(undefined);
    setShowModal(true);
  };

  return (
    <>
      <Banner />
      <div className="item-list">
      <PageName title={category.name} />
      <div className='item-list__wrapper'>
        <form class="search-container">
          <div class="search-bar-wrapper">
              <input type="text" className="search-bar" placeholder="Search"></input>
              <img src={magnifyingGlassIcon} class="search-icon" alt="magnifying-glas_icon"/>
            </div>
        </form>
        <div className="item-list__folders">
          {' '}
          {category.items.map((item) => (
            <div
              className="item-list__item"
              onClick={() => {
                setCurrentItemId(item.id);
                setShowModal(true);
              }}
              key={item.id}
            >
              <img
                className="item-list__folder-pic"
                src={folderIcon}
                alt="Folder Icon"
              />
              <p className="item-list__item-name">{item.name}</p>
            </div>
          ))}
          <div className="item-list__item" onClick={handleAddItem}>
            <img
              className="item-list__folder-add-pic"
              src={folderAddIcon}
              alt="folder-add"
            />
          </div>
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
          <Form
            onItemUpdated={handleItemUpdated}
            categoryId={categoryId}
            itemId={currentItemId}
          />
        </Modal>
      </div>
      </div>
    </>
  );
};

export default CategoryPage;
