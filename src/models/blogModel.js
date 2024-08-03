"use strict";

const mongoose = require("mongoose");

// const ModelSchema = new mongoose.Schema(
//   {
//     // _id: Number
//     fieldName: {
//       type: Number,
//       default: null,
//       trim: true,
//       unique: true,
//       index: true,
//       // required: true,
//       required: [true, "bunu kesin gonder"],
//       // enum:[1,2,3],
//       enum: [[[1, 2, 3], "bunlardan olmali"]],
//       validate: [
//         (data) => {
//           return true;
//         },
//         "hata mesaji",
//       ],
//       get: (data) => data,
//       set: (data) => data,
//     },
//   },
//   {
//     collection: "tableName",
//     timestamps: true,
//   },
// );

// const ModelName = mongoose.model('ModelName', ModelSchema)  

const BlogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
},{
    collection: 'blogCategories',
    timestamps: true
})

const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema)

const BlogPostSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    }
    
},{
    collection:'blogPosts',
    timestamps: true
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

module.exports = {
    BlogCategory: BlogCategory, 
    BlogPost: BlogPost
}