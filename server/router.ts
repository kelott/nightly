// @ts-nocheck

const Router = require('@koa/router');
const router = new Router();
const { getAllProducts, getOneProduct } = require('./controllers/productController.ts');
const { getAllCategories, getProductsOfCategory } = require('./controllers/categoryController.ts');

router.get('/products', getAllProducts);
router.get('/products/:productId', getOneProduct);

router.get('/products/categories', getAllCategories);
router.get('/products/category/:categoryName', getProductsOfCategory);

module.exports = router;
