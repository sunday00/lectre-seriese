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

(async () => {
    try {
        const data = await fsPro.read( `${__dirname}/dog.txt` );

        const res1Promise = superagent("get", `https://dog.ceo/api/breed/${data}/images/random`);
        const res2Promise = superagent("get", `https://dog.ceo/api/breed/${data}/images/random`);
        const res3Promise = superagent("get", `https://dog.ceo/api/breed/${data}/images/random`);

        const resAll = await Promise.all([ res1Promise, res2Promise, res3Promise ]);
        const imgs = resAll.map(itm => {
            return itm.body.message;
        });

        console.log( await fsPro.write(`${__dirname}/dogImg3.txt`, imgs.join("\n")) );

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