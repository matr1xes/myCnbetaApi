// const mongoose = require("mongoose");
const Article = require("../models/article");
const Router = require("koa-router");

const router = new Router();

router.get("/api/articles", async (ctx, next) => {
  const articles = await Article.find()
    .sort({ id: -1 })
    .limit(30);

  ctx.body = articles;
});

module.exports = router;
