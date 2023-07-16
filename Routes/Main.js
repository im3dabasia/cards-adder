const express = require("express")
const Router = express.Router();

const userRoutes = require('./User');
const positionRoutes = require('./Position');

Router.use('/users', userRoutes);
Router.use('/position', positionRoutes);

module.exports = Router;