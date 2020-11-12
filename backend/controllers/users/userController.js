const User = require('../../models/users/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const atob = require('atob');

exports.userLogin = (req, res, next) => {
  const email = req.body.email;
  let fetchedUser;

  User.findOne({email: email})
  .then(user => {
    if(!user) {
      return res.status(401).json({
        message: 'Check credentials'
      })
    }

    fetchedUser = user;
    return bcrypt.compare(atob(req.body.password), user.password);
  })
  .then(result => {
    if(!result) {
      return res.status(401).json({
        message: 'Check credentails'
      })
    }

    const token = jwt.sign({_id: fetchedUser._id}, 'secretLongEnough', { expiresIn: '1h' });
    return res.json({
      message: 'Login success!',
      token: token,
      user: fetchedUser
    })
  }, err => {
    res.status(500).json({
      message: err
    })
  })
}

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hashedPassword => {
    let reqBody = {...req.body, password: hashedPassword}

    const user = new User(reqBody)
    user.save()
    .then(newUser => {
      res.json({
        message: 'Success!',
        user: newUser
      })
    }).catch(err => {
      res.status(500).json({
        message: err,
      })
    })
  })
  
}

exports.updateUser = (req, res, next) => {
  User.findOne({_id: req.params.id})
  .then(oldUser => {
    if(!oldUser) {
      return res.status(500).json({
        message: 'User Not Found',
        success: false
      })
    }

    let { password, ...rest } = req.body
    User.updateOne({_id: req.params.id}, { $set: rest })
    .then(newUser => {
      if(!newUser) {
        return res.status(500).json({
          messgae: 'Something went wrong',
          success: false
        })
      }
      return res.status(200).json({
        message: 'User Updated',
        success: true
      })
    }, err => {
      return res.status(500).json({
        message: err,
        success: false
      })
    })
  }, err => {
    return res.status(500).json({
      message: err,
      success: false
    })
  })
}

exports.getProfile = (req, res, next) => {
  User.findOne({_id: req.query.id})
  .then(user => {
    if(!user) {
      return res.status(401).json({
        message: 'User not found',
        status: false
      })
    }

    return res.status(200).json({
      user: user,
      status: true,
      message: 'user'
    })
  }, err => {
    return res.status(500).json({
      message: err,
      status: false
    })
  })
}