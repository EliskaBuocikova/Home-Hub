import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return(
  
  <div className="container">
  <Header/>

  <Footer/>

  </div>
  )
};

createRoot(document.querySelector('#app')).render(<App />);
