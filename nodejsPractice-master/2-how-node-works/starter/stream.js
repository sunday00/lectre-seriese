const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res)=>{
    //1
    // fs.readFile(__dirname + "/test-file.txt", (err, data) => {
    //     if( err ) { console.log(err); } else { res.end(data); }
    // });

    //2
    // const readble = fs.createReadStream(__dirname + "/test-file.txt");
    // readble.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readble.on('end', ()=>{res.end();});
    // readble.on('error', err => {
    //    res.statusCode(500);
    //    res.end("Files notFound");
    //    console.log(err);
    // });

    //3
    const readable = fs.createReadStream(__dirname + "/test-file.txt");
    readable.pipe(res);
});

server.listen(8000, ()=>{
    console.log("listen..");
});