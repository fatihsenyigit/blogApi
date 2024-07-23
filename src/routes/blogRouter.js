"use strict";

const router = require("express").Router();

// call controllers
const { blogCategory, blogPost } = require("../controllers/blogController");

// URL: /blog
// BlogCategory
router.route("/category").post(blogCategory.create).get(blogCategory.list);
router
  .route("/category/:categoryId")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .patch(blogCategory.update)
  .delete(blogCategory.delete);

// BlogPost
router.route("/post").post(blogPost.create).get(blogPost.list);
router
  .route("/post/:postId")
  .get(blogPost.read)
  .put(blogPost.update)
  .patch(blogPost.update)
  .delete(blogPost.delete);

module.exports = router;
