import React from 'react';
import './style.css';
import PageName from '../PageName/PageName';
import Banner from '../Banner/Banner.jsx';

import { Link } from 'react-router-dom';
import { fetchCategories } from '../../apiFunctions/formItem';
import { useEffect, useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  console.log(categories);
  console.log(categories.icon);
  return (
    <>
      <Banner />
      <PageName title={'Categories'} />
      <div className="categories">
        {categories.map((category) => (
          <Link
            key={category.id}
            className={`category icon__${category.name}`}
            to="/itemlist"
          >
            <img src={`/img/catIcons/${category.Icon}.png`} />
            {category.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Categories;
