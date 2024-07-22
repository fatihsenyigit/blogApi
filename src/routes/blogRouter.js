
'use strict';

const router = require('express').Router()

// call controllers
const {blogCategory, blogPost} = require('../controllers/blogController')

// URL: /blog
// BlogCategory
router.route('/category').post(blogCategory.create)

module.exports = router