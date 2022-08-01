// @ts-nocheck

const fs = require('fs/promises');

const sequelize = require('./server/models/index.ts');
const { Product } = require('./server/models/product.ts');
const { Category } = require('./server/models/category.ts');

(async () => {
  try {
    await sequelize.sync({ force: true });
    popProductsFromJson();
  } catch (e) {
    console.log('failed to sync db');
  }
})();

async function popProductsFromJson() {
  try {
    const raw = await fs.readFile('./server/data/products.json');
    const productsFromApi = JSON.parse(raw);
    const flattenedProducts = productsFromApi.map((product) => {
      const { rating, ...rest } = product;
      return { ...rest, rate: rating.rate, count: rating.count };
    });
    await Product.bulkCreate(flattenedProducts);
    console.log('Db populated with products');
    popCategoriesFromJson();
  } catch (e) {
    console.log('Db could not be populated with products:', e.message);
  }
}

async function popCategoriesFromJson() {
  try {
    const raw = await fs.readFile('./server/data/categories.json');
    const categoriesFromApi = JSON.parse(raw);
    const categoriesArr = categoriesFromApi.map((categories) => ({ categories }));
    await Category.bulkCreate(categoriesArr);
    console.log('Db populated with categories');
  } catch (e) {
    console.log('Db could not be populated with categories:', e.message);
  }
}
