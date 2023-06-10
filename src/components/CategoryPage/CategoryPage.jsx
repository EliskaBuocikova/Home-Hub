import React from 'react';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';
import Form from '../Form/Form';
import folderIcon from '../../img/folder-icon.svg';
import folderAddIcon from '../../img/folder-add-icon.svg';
import magnifyingGlassIcon from '../../img/magnifying-glass-icon.png';
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

  useEffect(() => {
    fetchCategory(categoryId).then(setCategory);
  }, []);
  console.log(category);
  if (category === null) {
    return <div></div>;
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleNewItem = () => {
    fetchCategory(categoryId).then(setCategory);
    setShowModal(false);
  };

  return (
    <>
      <Banner />
      <PageName title={category.name} />
      <div className="item-list">
        <form>
          <input type="text" placeholder="search" />
          <button className="magnifying-glass-icon">
            <img
              className="magnifying-glass-pic"
              src={magnifyingGlassIcon}
              alt="Magnifying Glass"
            />
          </button>
        </form>
        <div className="item-list__folders">
          {' '}
          {category.items.map((item) => (
            <Link
              className="item-list__item"
              to={`/itemdetail/${item.id}`}
              key={item.id}
            >
              <img
                className="item-list__folder-pic"
                src={folderIcon}
                alt="Folder Icon"
              />
              <p className="item-list__item-name">{item.name}</p>
            </Link>
          ))}
          <div className="item-list__item" onClick={openModal}>
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
          <Form onNewItem={handleNewItem} categoryId={categoryId} />
        </Modal>
      </div>
    </>
  );
};

export default CategoryPage;
