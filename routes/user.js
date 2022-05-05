const express=require('express');
const routes=express.Router();


const userContr=require('../controllers/users_controller');

routes.get('/profile',userContr.profile);
routes.get('/singup',userContr.singup);
routes.get('/login',userContr.login)






module.exports=routes;