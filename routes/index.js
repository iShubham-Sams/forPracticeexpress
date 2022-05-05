const express=require('express');
const routes=express.Router();

const homeControl=require('../controllers/homeController')

routes.get('/',homeControl.home);
routes.use('/user',require('./user'))



module.exports=routes;