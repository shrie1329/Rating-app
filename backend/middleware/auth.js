const jwt = require('jsonwebtoken');

// Middleware to check JWT
module.exports = function (req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Expect header: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user data
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
