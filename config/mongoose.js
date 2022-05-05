const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/social_devlopment');

const db=mongoose.connection

db.on('error',console.error.bind(console,'error on connectin database'));
db.once('open',function(){
    console.log('connection to bind database')
});

module.exports=db;