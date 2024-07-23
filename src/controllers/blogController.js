

'use strict';

const {BlogCategory, BlogPost } = require('../models/blogModel')

// BlogCategory controllers

module.exports.blogCategory = {

    list: async (req, res) => {
        const data = await BlogCategory.find()
        res.status(200).send({
            error: false,
            result: data
        })
    },

    create: async (req, res) => {
        // res.send('create method calisti')
        const data = await BlogCategory.create(req.body)
        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {
        const data = await BlogCategory.findOne({_id: req.params.categoryId})
        res.status(200).send({
            error: false,
            result:data
        })
    },

    update: async (req, res)=> {
        const data = await BlogCategory.updateOne({_id: req.params.categoryId}, req.body)
        res.status(202).send({
          error: false,
          result: data,
          new: await BlogCategory.findOne({_id: req.params.categoryId})
        });
    },
    
    delete: async (req, res) => {
        const data = await BlogCategory.deleteOne({_id: req.params.categoryId})
        if(data.deletedCount >=1) {
            res.sendStatus(204)
        } else {
            res.errorStatusCode = 404
            throw new Error('not found')
        }
    }
}


// BlogPost controllers


module.exports.blogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.postId });
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await BlogPost.updateOne(
      { _id: req.params.postId },
      req.body,
    );
    res.status(202).send({
      error: false,
      result: data,
      new: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },

  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    if (data.deletedCount >= 1) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("not found");
    }
  },
};

