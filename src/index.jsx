import React from 'react';
import { createRoot } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Login from './components/Login/Login.jsx';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import ItemList from './components/ItemList/ItemList.jsx';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <main className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
>>>>>>> edaade4de1075c113181bb3e4961b700cf78fee8
  );
};

createRoot(document.querySelector('#app')).render(<App />);
