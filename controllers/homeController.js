
module.exports.home=function(req,res){
    console.log(req.cookies);
    // res.cookie('shfd',45)
    return res.render('home',{
        title:"home"
    })

}