const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User =require('../models/user')



// authentication using passport
passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
// find the user and establish the identity
User.findOne({email:email},function(err,user){
    if(err){console.log('error in finding user --> passport');return done(err);}
    if(!user || user.password!==password){
        console.log('invalid username/password');
        return done(null,false);
    }
    return done (null,user)
})
}
))


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
})

// decerializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){console.log('error deserialize')
        return done(err);
    }
    return done(null,user)
    })
})

passport.checkAuthentication=function(req,res,next){
    // if user is signed in ,then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in
    return res.redirect('/user/login')
}

passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
        // send req.user to res.local (req.user contain cookie)
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;