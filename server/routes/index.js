const express = require('express');
const messageRoutes = require('./messageRoutes');
const authRoutes = require('./authRoutes');

/**
 * Initialize all API routes
 * @param {express.Application} app - Express application instance
 */
const initializeRoutes = (app) => {
  // API routes
  app.use('/api/messages', messageRoutes);
  app.use('/api/auth', authRoutes);
  
  // Log registered routes
  console.log('API routes registered:');
  console.log('- /api/messages');
  console.log('- /api/auth');
  
  return app;
};

module.exports = initializeRoutes;
