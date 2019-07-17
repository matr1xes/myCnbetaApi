const Koa = require("koa");
const config = require("config");
const cors = require("@koa/cors");
const app = new Koa();

require("./startup/db")();

const router = require("./routes");
app.use(cors());
app.use(router.routes());

const port = process.env.PORT || config.get("port");

app.listen(port, console.log(`listening on port: ${port}`));
