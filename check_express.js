const express = require('express')

const app = express();

app.get('/',function(req,res){
    // console.log('Hello world')
    res.send('Hello World')
})

app.get('/alien',function(req,res){
    const id = req.query.id
    res.send('welcome back selfcoders'+id)
})

// app.get('/alien/20',function(req,res){
//     res.send('hey Pranav')
// })

// making dynamic
app.get('/alien/:id',function(req,res){
    const id = req.params.id
    res.send('hey Pranav'+ id)
})

// nodemon will help to refresh the server


app.listen(9000,function(req,res){
    console.log('running')
});



