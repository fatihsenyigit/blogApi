

'use strict';

const {BlogCategory, BlogPost } = require('../models/blogModel')

// BlogCategory controllers

module.exports.blogCategory = {

    list: async (req, res) => {
        // const data = await BlogCategory.find()
        const data = await res.getModelList(BlogCategory);
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(BlogCategory),
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

    //  const filter = req.query?.filter || {}
    //  const search = req.query?.search || {}
    //  const sort = req.query?.sort || {}
     
    //  let limit = Number(req.query?.limit)
    //  limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 10);

    //  let page = Number(req.query?.page)
    //  page = page > 0 ? page : 1

    //  let skip = Number(req.query?.skip)
    //  skip = skip > 0 ? skip : ((page-1)*limit)

    //  for(let key in search)
    //     search[key] = {$regex: search[key]}

    // const data = await BlogPost.find({ ...filter, ...search })
    //   .sort(sort)
    //   .skip(skip)
    //   .limit(limit)
    //   .populate("categoryId");

    const data = await res.getModelList(BlogPost, 'categoryId')

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(BlogPost),
      result: data,
    });
  },

  create: async (req, res) => {
    req.body.userId = req.user?._id
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

