// @ts-nocheck
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { getAllCategories, getAllProducts } from './utils/apiService';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allProducts = await getAllProducts();
        const allCategories = await getAllCategories();
        setProducts(allProducts);
        setCategories(allCategories);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar categories={categories} />
      <Outlet context={products} />
    </div>
  );
}

export default App;
