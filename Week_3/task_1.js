const os = require('os');

const http = require('http');

const port  = 3000;

const totalMem = os.totalmem().toFixed(2)

const freeMem = os.freemem().toFixed(2)

const server = http.createServer((req, res) => {
   
if(req.url === '/serverinfo'){
        
res.writeHead(200, { 
            'Content-Type': 'application/json'
        });

        res.write(`Username : ` + os.userInfo().username + `\n`)
        res.write(`Home directory : ` +os.homedir()+ `\n`)
        res.write(`PlatForm : ` +os.platform()+ `\n`)
        res.write(`Total Memory : ` +totalMem+ `\n`)
        res.write(`Free Memory : ` +freeMem + `\n`)
        res.write(`Percentage : ` +((freeMem / totalMem )*100 ).toFixed(2) + `%`)
        res.end()
}else{
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.write('404 Not Found');
    res.end()
}
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
