// file system

var fs = require('fs')

// fs.readFile('calc.js','utf8',function(err,data){
//     console.log(data)
// })

// it will remove all content if there is anything in file
// fs.writeFile('calc1.js','console.log("done")',function(err){
//     console.log("data saved")
// })

// Append 

// fs.appendFile('calc1.js','console.log("done")',function(err){
//     console.log("data saved")
// })

// delete

fs.unlink('calc1.js',function(err){
    console.log('Deleted')
})

