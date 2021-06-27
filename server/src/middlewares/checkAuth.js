const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = process.env;

const checkAuth = (req, res, next) => {
  const tokenHeader = req.get('authorization');
  const token = tokenHeader && tokenHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied, token missing!' });
  } else {
    try {
      const payload = jwt.verify(token, ACCESS_TOKEN_SECRET);
      req.user = payload.user;
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res
          .status(401)
          .json({ error: 'Session timed out, please login again' });
      } else if (error.name === 'JsonWebTokenError') {
        return res
          .status(401)
          .json({ error: 'Invalid token, please login again!' });
      } else {
        console.error(error);
        return res.status(400).json({ error });
      }
    }
  }
};

module.exports = checkAuth;
