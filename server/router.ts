// @ts-nocheck

const Router = require('@koa/router');
const router = new Router();
const {
  getAllProducts,
  getOneProduct,
  fetchProducts,
  getProductsOfCategory,
} = require('./controllers/productController.ts');
const { getAllCategories } = require('./controllers/categoryController.ts');
const {
  getShoppingCart,
  addToShoppingCart,
  removeFromShoppingCart,
  changeShoppingCart,
} = require('./controllers/shoppingCartController.ts');

router.get('/products/categories', getAllCategories);

router.get('/products', getAllProducts);
router.get('/products/category/:categoryName', getProductsOfCategory);
router.get('/products/:productId', getOneProduct);

router.get('/shoppingcart', getShoppingCart);
router.post('/shoppingcart', addToShoppingCart);
router.put('/shoppingcart', changeShoppingCart);
router.delete('/shoppingcart', removeFromShoppingCart);

module.exports = router;
