const express=require('express');
const port =8000;
const path=require('path');
const cookieParsser=require('cookie-parser');
const db=require('./config/mongoose')
// const expressLayouts=require('express-ejs-layouts')
const app=express();

// app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParsser());

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('error acured in listion');
        return

    }
    console.log('success in port:',port)
} )