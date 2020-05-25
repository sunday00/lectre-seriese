const fs = require('fs');
const superagent = require("superagent");

const fsPro = {
    read (file) {
        return new Promise((resolve, reject)=>{
            fs.readFile(file, (err, data) => {
                if (err) reject(err.message);
                resolve(data);
            });
        });
    },

    write(file, data){
        return new Promise((resolve, reject)=>{
            fs.writeFile(file, data, (err) => {
                if (err) reject(err.message);
                resolve('data saved');
            });
        });
    }
};

console.log("is it blocking?");
(async () => {
    try {
        const data = await fsPro.read( `${__dirname}/dog.txt` );
        const res = await superagent("get", `https://dog.ceo/api/breed/${data}/images/random`);
        const res2 = await res.body.message;
        console.log(res2);
        console.log( await fsPro.write(`${__dirname}/dogImg2.txt`, res2) );
        return "complete read file and write 🐶 pic";
    } catch (err) {
        console.log(err.message);
        throw err;
    }
})().then( res => {
    console.log(res);
    console.log("end");
}).catch(err=>{
    console.log("err. 💥");
    console.log(err);
});
// console.log("end");