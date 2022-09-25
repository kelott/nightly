// @ts-nocheck

const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');

const sequelize = require('./models/index.ts');
const router = require('./router.ts');
const { host, port } = require('./utils/config.ts');

app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser());
app.use(router.routes());
app.use(serve('../client/build/'));

(async () => {
  try {
    sequelize.sync();
    console.log('Connected to database');
    app.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`);
    });
  } catch (e) {
    console.log('Database connection failed', e);
  }
})();
