const EventEmitter = require('events');

class Sales extends EventEmitter
{
    constructor() {
        super();
    }

    consoling (arg) {
        console.log(arg);
    }
}

const myEmitter = new Sales();

myEmitter.on("newSale", ()=>{
    console.log("sale is happen");
});
myEmitter.on("newSale", ()=>{
    process.nextTick(()=>{
        console.log("customer is coming");
    })
});
myEmitter.on("newSale", (stock)=>{
    setTimeout(()=>{
        console.log(`Prepare ${stock} package!`);
    }, 0);
});
myEmitter.on("newSale", (stock, name)=>{
    setImmediate(()=>{
        console.log(`OHOHOHOHO ${name}!`);
    });
});

myEmitter.emit("newSale", 9, 'Kim');

myEmitter.consoling(7);

const http = require('http');
const server = http.createServer();
server.on("request", (req, res)=>{
    console.log("req");
    res.end("req receive");
});
server.on("request", (req, res)=>{
    console.log("another req receive");
});
server.on("close", ()=>{
   console.log("down");
});

myEmitter.on('request', (e)=>{
    console.log(e);
    console.log("of course custom emitter can listen request 😃'");
});

server.listen(8888, 'localhost', ()=>{
    console.log( `running on 8888` );
});