// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Product } from './components/Product';
import { Category } from './components/Category';
import { ShoppingCart } from './components/ShoppingCart';
import HomeStyle from './components/Home.css';
import AppStyle from './App.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App style={AppStyle} />}>
          <Route index element={<Home style={HomeStyle} />}></Route>
          <Route path="product/:productId" element={<Product />}></Route>
          <Route path="product/category/:categoryName" element={<Category />}></Route>
          <Route path="shoppingcart" element={<ShoppingCart />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
