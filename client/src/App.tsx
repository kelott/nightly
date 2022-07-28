// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
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
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
