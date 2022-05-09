const express=require('express');
const port =8000;
const path=require('path');
const app=express();
const cookieParsser=require('cookie-parser');
const db=require('./config/mongoose')
// below mongoose set express-session session cookie
const session=require('express-session');
const passport=require('passport')
const passportLocal=require('./config/passport-local-strategy');

// for connecting mongo 
const MongoStore=require('connect-mongo');

// const expressLayouts=require('express-ejs-layouts')


app.use(express.urlencoded());
app.use(cookieParsser());
app.use(express.static('./assets'));

// app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); 
// set up 
app.use(session({
    name:'social media app',
    // to do change in prodection mode
    secret:"djslahfdjd",
    saveUninitialized:false,
    resave:false,
    // for session expire
    cookie:{
        maxAge:(1000*60*100)
    },
    store:MongoStore.create({
        mongoUrl:'mongodb://localhost/social_devlopment',
        autoRemove:'disabled'
    },function(err){
        console.log(err || 'connect mongodb setup ok' )
    })
}))

app.use(passport.initialize());
app.use(passport.session()); 

app.use(passport.setAuthenticatedUser);




app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('error acured in listion');
        return

    }
    console.log('success in port:',port)
} )