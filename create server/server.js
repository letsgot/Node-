const http = require('node:http');

const server = http.createServer((req,res)=>{
   if(req.url==='/start'){
    res.end("Start present");
   }

   res.end("Server present")
})

server.listen(2000);