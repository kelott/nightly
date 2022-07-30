// @ts-nocheck

const Router = require('@koa/router');
const router = new Router();
const { getAllProducts, getOneProduct, fetchProducts } = require('./controllers/productController.ts');
const { getAllCategories, getProductsOfCategory } = require('./controllers/categoryController.ts');
const { getShoppingCart, addToShoppingCart } = require('./controllers/shoppingCartController.ts');

router.get('/products', getAllProducts);
router.get('/products/:productId', getOneProduct);

router.get('/products/categories', getAllCategories);
router.get('/products/category/:categoryName', getProductsOfCategory);

router.get('/shoppingcart', getShoppingCart);
router.post('/shoppingcart/', addToShoppingCart);

module.exports = router;
