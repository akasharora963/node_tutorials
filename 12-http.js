const http = require('http')

const server = http.createServer((req,res)=>{
    //console.log(req)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    //res.write('Welcome to our home page ')
    //res.end()
    if(req.url === '/about'){
        res.end('Anime Boi')
    }
    res.end(`
        <h1> Oops </h1>
        <p> No page found to your request</p>
        <a href ='/'>Back Home </a>
    `)
})

server.listen(5000)