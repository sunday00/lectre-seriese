const fs = require('fs');
const http = require("http");
const url = require('url');

const slugify = require("slugify");

const replaceTemplate = require("./starter/moduels/replaceTemplate");
/**
 * this is just test line;
 */
// const greet = "hello world";

/**
 * this is file test;
 */

// let str1 = fs.readFileSync("./starter/txt/input.txt", 'utf-8');
// console.log(str1);
//
// let str2 = `this is read from file avocado : ${str1}.\ncreated on ${Date.now()}\n`;
//
// console.log(str2);
//
// fs.writeFileSync("./starter/txt/output.txt", str2);
// console.log("Written at ./starter/txt/output.txt. cat ./starter/txt/output.txt.");

// fs.readFile("./starter/txt/start.txt", "utf-8",(err, data) => {
//     fs.readFile(`./starter/txt/${data}.txt`, "utf-8", (err2, data2) => {
//         console.log(data2);
//         fs.readFile("./starter/txt/append.txt", "utf-8", (err3, data3) => {
//             console.log(data3);
//             fs.writeFile("./starter/txt/final.txt", 'utf-8', err => {
//                 if (err) throw err;
//                 console.log("DONE. 😃");
//             });
//         });
//     });
// });
//
// console.log("maybe this is first");

/**
 * this is Server block;
 */
const server = http.createServer((req, res) => {

    let msg = doservice(req, res /*, (err, msg)=>{
        console.log(msg);
        res.end(msg);
    } */);

    // res.end("server is running now");

    res.end(msg);
});

server.listen(3000, () => {
    console.log(`Server is started at ${ server.address().port }`);
});

/**
 * service function
 */



const tempOverview =fs.readFileSync(`${__dirname}/starter/templates/tpl-overview.html`, 'utf-8');
const tempCard =fs.readFileSync(`${__dirname}/starter/templates/tpl-card.html`, 'utf-8');
const tempProduct =fs.readFileSync(`${__dirname}/starter/templates/tpl-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map( el => {
    return slugify(el.productName, {lower:true});
});
console.log(slugs);

function doservice (req, res /*, callback*/){

    let {query, pathname} = (url.parse(req.url, true));
    // console.log(query);
    // console.log(pathname);

    //overview
    if (pathname === '/' || pathname === '/overview'){
        res.writeHead(200, {
            'Content-type' : "text/html",
        });

        const cardHtml = dataObj.map( el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace(/{% ProductCards %}/g, cardHtml);


        //return "overview page";
        res.end(output);

    //Product page
    } else if(pathname === '/product'){
        res.writeHead(200, {'Content-type': 'text/html'});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        res.end(output);

    //Api
    } else if(pathname === '/API'){

        // fs.readFile(`${__dirname}/starter/dev-data/data.json`, 'utf-8', (err, data)=>{
        //     const productData = JSON.parse(data);
        //     // console.log(productData);
        //     res.writeHead(200, {
        //         'Content-type' : "application/json",
        //     });
        //     callback(err, data);
        // });
        res.writeHead(200, {
            'Content-type' : "application/json",
        });
        return data;

    //NotFound
    } else {
        res.writeHead(404,{
            'Content-type' : "text/html",
            'my-own-header' : "hello header"
        });
        return "<h2>page not found</h2>";
    }

}