 
'use strict';

const {User} = require('./src/models/userModel')
const {BlogCategory, BlogPost} = require('./src/models/blogModel')

module.exports = async() => {

    // example data, deleted all records
    await User.deleteMany().then(() => console.log(' - user deleted all'))
    await BlogCategory.deleteMany().then(()=> console.log(' - blogCategory deleted all'))
    await BlogPost.deleteMany().then(()=> console.log(' - blogPost deleted all'))

    // example user

    const user = await User.create({
        email: 'test@test.com',
        password: '123456789',
        firstName: ' test',
        lastName: 'test'
    })

    // example category

    const blogCategory = await BlogCategory.create({
        name: 'test category'
    })

    //example posts

    for (let key in [...Array(200)]) {
        await BlogPost.create({
            userId: user._id,
            categoryId: blogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key % 2)
        })
    }

    console.log(' - sync finished')

}