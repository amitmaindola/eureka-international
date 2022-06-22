const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

app.get('/',function(req, res){
    res.render('home');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Server has been started at port ${port}`)
})