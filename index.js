const express = require('express')
const fs = require('fs')
const path= require('path')
const app = express();

// EXPRESS SPECIFIC STUFF
app.use('/Html',express.static('Html'))
app.use('/CSS',express.static('CSS'))
app.use('/Images',express.static('Images'))
app.use('/JavaScript',express.static('JavaScript'))
app.use('/Contact Us info',express.static('Contact Us info'))
app.use(express.urlencoded())

app.set('Html',path.join(__dirname,'Html'))

const home = fs.readFileSync('Html/home.html','utf-8')
const book = fs.readFileSync('Html/book.html','utf-8')

app.get('/',(req,res)=>{
    res.status(200).end(home);
})
app.get('/book',(req,res)=>{
    res.status(200).end(book);
})
app.post('/',(req,res)=>{
    const data = JSON.stringify(req.body)+"\n"
    fs.appendFileSync(`Contact Us info/${req.body.name} info.json`,data);
    res.status(200).end(home);
})

app.listen(80,()=>{
    console.log("Server running at 127.0.0.1")
})
