import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts } from './utils/apiService';
import { Products } from './utils/types';

function App() {
  const [products, setProducts] = useState<Products | []>([]);
  useEffect(() => {
    (async () => {
      const allProducts = await getAllProducts();
      setProducts(allProducts);
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
