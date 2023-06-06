import React from 'react';
import { createRoot } from 'react-dom';
import './style.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Categories from './components/Categories/Categories';
import Login from './components/Login/Login.jsx';
import ItemList from './components/ItemList/ItemList.jsx';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />

        <main className="main">
          <Categories />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/items" element={<ItemList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
