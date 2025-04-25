const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { protect, authorize } = require('../middleware/auth');

// Public route for creating messages (contact form)
router.post('/', messageController.createMessage);

// Protected admin routes
router.get('/', protect, authorize('admin', 'staff'), messageController.getMessages);
router.get('/stats', protect, authorize('admin', 'staff'), messageController.getMessageStats);
router.get('/:id', protect, authorize('admin', 'staff'), messageController.getMessage);
router.put('/:id/status', protect, authorize('admin', 'staff'), messageController.updateMessageStatus);
router.delete('/:id', protect, authorize('admin'), messageController.deleteMessage);

module.exports = router;
