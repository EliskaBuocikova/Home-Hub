import React from 'react';
import PageName from '../PageName/PageName';
import folderIcon from '../../img/folder-icon.svg';
import folderAddIcon from '../../img/folder-add-icon.svg';
import magnifyingGlassIcon from '../../img/magnifying-glass-icon.png';
import { Link } from 'react-router-dom';
import './style.css';
import { fetchCategory, fetchListItem } from '../../apiFunctions/formItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemList = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategory(categoryId).then(setCategory);
  }, []);
  console.log(category);

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
              alt="Magnifying Glass"
            />
          </button>
        </form>
        <div className="item-list__folders">
 
          <Link className="item-list__item" to="/form">
            <img
              className="item-list__folder-add-pic"
              src={folderAddIcon}
              alt="Folder Add Icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ItemList;
