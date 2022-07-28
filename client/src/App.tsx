// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { getAllProducts } from './utils/apiService';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const allProducts = await getAllProducts();
        setProducts(allProducts);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
