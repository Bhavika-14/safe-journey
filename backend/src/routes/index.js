const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.route')
const salesRoutes = require('./sales.route')
const hrRoutes = require('./hr.route')

router.use('/auth', authRoutes);
router.use('/sales', salesRoutes);
router.use('/hr', hrRoutes);



module.exports = router;