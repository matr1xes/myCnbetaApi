const Article = require("../models/article");
const Router = require("koa-router");

const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = "nothing here.....";
});

router.get("/api/articles", async (ctx, next) => {
  const articles = await Article.find()
    .sort({ id: -1 })
    .limit(300);

  ctx.body = articles;
});

module.exports = router;
