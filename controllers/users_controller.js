const User=require('../models/user')

module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"user profile"
    })
}

// for rendring singup form

module.exports.singup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('singup',{
        title:"signup-form"
    })
} 

// for rendring log in form


module.exports.login=function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('login',{
        title:"login-form"
    })

}

// get singup data

module.exports.create=function(req,res){
    if(req.body.password !=req.body.confirm_password){return res.redirect('back')}

    User.findOne({email:req.body.email},function (err,user) {
        if(err){console.log('error in finding user') ; return }
        if(!user){User.create(req.body,function(err,user){
            if(err){console.log('error in creating user');return}
            return res.redirect('/user/login');
        })
    }else{
        return res.redirect('/user/profile')}
    }
)
}

// sign in and creat a session
module.exports.createSession=function(req,res){
    return res.redirect('/user/profile')
}