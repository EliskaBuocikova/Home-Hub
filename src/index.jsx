import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import Login from './components/Login/Login.jsx';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import ItemList from './components/ItemList/ItemList.jsx';
import History from './components/History/History';
import Form from './components/Form/Form';

import './style.css';


const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <main className="main">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/itemlist" element={<ItemList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/history" element={<History />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
