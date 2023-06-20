const http=require('http')
const fs=require('fs')
const password=require('./password-generator')

// fs.writeFile('welcome.txt','hello node',(err)=>err?console.log(err):console.log("file created!!"))

// fs.readFile('welcome.txt','utf-8',(err,data)=>err?console.log(err):console.log(data))
password()
const port=8080
const server=http.createServer((req,res)=>{
    res.end=('<h1>hello bessem</h1>')
}
)
server.listen(port,(err)=>err?console.log(err):console.log(`server running on ${port}`))