const mongoose = require("mongoose");

const Article = mongoose.model(
  "articles",
  new mongoose.Schema({
    id: String,
    title: String,
    type: String,
    creator: String,
    date: Date,
    link: String,
    contentSnippet: String,
    createdDate: {
      type: Date,
      default: Date.now
    }
  })
);

module.exports = Article;
