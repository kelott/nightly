// @ts-nocheck

const { Product } = require('../models/product.ts');
const { populateDbProducts } = require('../utils/populateDb');

exports.getAllProducts = async (ctx) => {
  try {
    ctx.body = await Product.findAll();
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.getOneProduct = async (ctx) => {
  const { productId } = ctx.params;
  try {
    ctx.body = await Product.findOne({
      where: {
        id: productId,
      },
    });
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

// const popAllProducts = async (productsFromApi) => {
//   try {
//     await Product.bulkCreate(productsFromApi);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

(async () => {
  try {
    const productsFromApi = await populateDbProducts();
    const flattenedProducts = productsFromApi.map((product) => {
      const { rating, ...rest } = product;
      return { ...rest, rate: rating.rate, count: rating.count };
    });
    await Product.bulkCreate(flattenedProducts);
    console.log('Db populated with products');
  } catch (e) {
    console.log('Db could not be populated with products:', e.message);
  }
})();
