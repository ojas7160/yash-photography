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