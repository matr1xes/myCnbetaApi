const Koa = require("koa");
const config = require("config");
const app = new Koa();

require("./startup/db")();

const router = require("./routes");
app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || config.get("port");

app.listen(port, console.log(`listening on port: ${port}`));
