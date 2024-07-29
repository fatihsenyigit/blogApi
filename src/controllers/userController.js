
'use strict';

const {User} = require('../models/userModel')

module.exports.user = {
  list: async (req, res) => {
    const data = await User.find();
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  create: async (req, res) => {
    // res.send('create method calisti')
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });
    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await User.updateOne(
      { _id: req.params.userId },
      req.body,
      {runValidators: true}
    );
    res.status(202).send({
      error: false,
      result: data,
      new: await User.findOne({ _id: req.params.userId }),
    });
  },

  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    if (data.deletedCount >= 1) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("not found");
    }
  },
};