const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.get('/',function(req, res){
    res.render('home');
});

app.listen(3000, ()=>{
    console.log("Server has been started at port 3000")
})