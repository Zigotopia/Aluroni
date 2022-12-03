import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import './index.css';
import Cardapio from './Paginas/cardapio/index.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Cardapio/>
  </React.StrictMode>
);

