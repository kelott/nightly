// @ts-nocheck
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { getAllCategories, getAllProducts } from './utils/apiService';
import { getCart } from './utils/ShoppingCartStorage';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});

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

  useEffect(() => {
    const productsInCart = getCart();
    setShoppingCart(productsInCart);
  }, []);

  return (
    <div>
      <Navbar categories={categories} />
      <Outlet context={{ products, shoppingCart, setShoppingCart }} />
    </div>
  );
}

export default App;
