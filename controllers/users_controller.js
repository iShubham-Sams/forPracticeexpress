module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"user profile"
    })
}

module.exports.singup=function(req,res){
    return res.render('singup',{
        title:"signup-form"
    })
} 


module.exports.login=function(req,res){
    return res.render('login',{
        title:"login-form"
    })

}


module.exports.create=function(req,res){
    // todo later
}
module.exports.createSession=function(req,res){
    // todo later
}