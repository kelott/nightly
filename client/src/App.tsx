// @ts-nocheck
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { getAllCartItems, getAllCategories, getAllProducts } from './utils/apiService';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  function prepCart(items) {
    const cart = {};
    for (const item of items) {
      const { productId, cartcount } = item;
      cart[productId] = { cartcount };
    }
    return cart;
  }

  useEffect(() => {
    (async () => {
      try {
        const allProducts = await getAllProducts();
        const allCategories = await getAllCategories();
        const allCartItems = await getAllCartItems();
        setProducts(allProducts);
        setCategories(allCategories);
        setShoppingCart(prepCart(allCartItems));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar categories={categories} searchParams={searchParams} setSearchParams={setSearchParams} />
      <Outlet context={{ products, shoppingCart, setShoppingCart, categories }} />
    </div>
  );
}

export default App;
