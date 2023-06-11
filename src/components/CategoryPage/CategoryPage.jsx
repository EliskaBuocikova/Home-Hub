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

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [currentItemId, setCurrentItemId] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchCategory(categoryId).then(setCategory);
  }, []);

  if (category === null) {
    return <div></div>;
  }

  const handleItemUpdated = () => {
    fetchCategory(categoryId).then(setCategory);
    setShowModal(false);
  };

  const handleAddItem = () => {
    setCurrentItemId(undefined);
    setShowModal(true);
  };

  const openForm = () => {
    setShowModal(true);
  };

  const closeForm = () => {
    setShowModal(false);
  };

  let className = 'modal';
  if (showModal === true) {
    className += ' modal-open';
  }

  return (
    <>
      <Banner />
      <div className="item-list">
        <PageName title={category.name} />
        <div className="item-list">
          <form className="search-container">
            <div className="search-bar-wrapper">
              <input
                type="text"
                className="search-bar"
                placeholder="Search"
              ></input>
              <img
                src={magnifyingGlassIcon}
                className="search-icon"
                alt="magnifying-glas_icon"
              />
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
            <div className="item-list__item" onClick={openForm}>
              <img
                className="item-list__folder-add-pic"
                src={folderAddIcon}
                alt="folder-add"
              />
            </div>
          </div>
          {/* Vyjížděcí okno formuláře: */}
          <div id="myModal" className={className}>
            <div className="modal-content">
              <button onClick={closeForm} className="close"></button>
              <Form
                onItemUpdated={handleItemUpdated}
                categoryId={categoryId}
                itemId={currentItemId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
