const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if(token) {
      const decodedToken = jwt.verify(token, 'secretLongEnough');
      req.userData = {email: decodedToken.email, userId: decodedToken.userId}
      next();
    } else {  
      res.status(401).json({
        message: 'Token verification failed'
      })
    }
  } catch(err) {
    res.status(401).json({
      message: 'Token verification failed',
      error: err
    })
  }
}