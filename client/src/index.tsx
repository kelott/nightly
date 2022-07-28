// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path="product/:productId" element={<Product />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
