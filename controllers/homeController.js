
module.exports.home=function(req,res){
    // console.log(req.cookies);
    // res.cookie('shfd',45)    this for changing the value of server side
    return res.render('home',{
        title:"home"
    })

}