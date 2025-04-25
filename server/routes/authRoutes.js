const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

// Request logging middleware
router.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Auth routes
router.post('/register', protect, authorize('admin'), authController.register);
router.post('/register-test', authController.register); // Test route without auth for debugging
router.post('/login', authController.login);
router.get('/me', protect, authController.getMe);
router.get('/users', protect, authorize('admin'), authController.getUsers);
router.get('/test-users', authController.getTestUsers); // Test endpoint to get test users

// User management routes (admin only)
router.delete('/users/:userId', protect, authorize('admin'), authController.deleteUser);
router.put('/users/:userId', protect, authorize('admin'), authController.updateUser);

module.exports = router;
