// @ts-nocheck
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
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
    <div>
      <Navbar />
      <Outlet context={products} />
    </div>
  );
}

export default App;
