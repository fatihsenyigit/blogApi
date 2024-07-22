

'use strict';

const {BlogCategory, BlogPost } = require('../models/blogModel')

// BlogCategory controllers

module.exports.blogCategory = {
    create: async (req, res) => {
        // res.send('create method calisti')
        const data = await BlogCategory.create(req.body)
        res.status(201).send({
            error: false,
            result: data
        })
    }
}


// BlogPost controllers

module.exports.blogPost = {

}