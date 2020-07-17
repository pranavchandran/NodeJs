// let a =7
// let b = 2

// let c = a + b

// console.log('hello world',c)

// var http = require('http')


// http.createServer(function(req,res){
//     // res.write("Welcome back ")
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end('Welcome pranav')
// }).listen(8080)

function add(a,b){
    return a + b
}
function sub(a,b){
    return a-b
}
// result = add(4,5)
// console.log(result)

module.exports.add = add
module.exports.sub = sub