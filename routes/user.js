const express=require('express');
const routes=express.Router();
const passport=require('passport');


const userContr=require('../controllers/users_controller');

routes.get('/profile',passport.checkAuthentication,userContr.profile);
routes.get('/singup',userContr.singup);
routes.get('/login',userContr.login)

routes.post('/creat',userContr.create);

// use passport as a middlewear
routes.post('/creat/session',passport.authenticate('local',
{failureRedirect:'/user/login'},
),userContr.createSession);






module.exports=routes;