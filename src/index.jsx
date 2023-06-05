import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Categories from './components/Categories/Categories';


const App = () => {
  return(
  
  <div className="container">
  <Header/>
  <Categories/>

  <Footer/>

  </div>
  )
};

createRoot(document.querySelector('#app')).render(<App />);
