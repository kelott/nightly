// @ts-nocheck

const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const sequelize = require('./models/index.ts');
const router = require('./router.ts');
const { HOST, PORT } = require('./utils/config.ts');

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser());
// Todo: Serve static files
app.use(router.routes());

(async () => {
  try {
    sequelize.sync();
    console.log('Connected to database');
    app.listen(PORT, () => {
      console.log(`Listening on ${HOST}:${PORT}`);
    });
  } catch (e) {
    console.log('Database connection failed', e);
  }
})();
