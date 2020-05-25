const fs = require('fs');
const superagent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`, (err, data)=>{
//     // superagent("get", `https://dog.ceo/api/breed/${data}/images/random`)
//     //     .end((err, res)=>{
//     //          if (err) console.log(err);
//     //         console.log( res.body.message );
//     //
//     //         fs.writeFile(`${__dirname}/dogImg.txt`, res.body.message, err => {
//     //             console.log("Done");
//     //
//     //             if (err) console.log(err);
//     //         });
//     //     });
//     superagent("get", `https://dog.ceo/api/breed/${data}/images/random`)
//         .then( res => {
//             console.log( res.body );
//             fs.writeFile(`${__dirname}/dogImg.txt`, res.body.message, err => {
//                 console.log("Done");
//
//                 if (err) console.log(err);
//             });
//         }).catch( err => {
//
//         });
// });

// function fsPro (file) { ... } but not constant, so function name is not safe from coworker.
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
}

fsPro.read( `${__dirname}/dog.txt` ).then(data => {
    return superagent("get", `https://dog.ceo/api/breed/${data}/images/random`);
}).then( res => {
    console.log( res.body.message );
    return res.body.message;
}).then((res) => {
    return fsPro.write(`${__dirname}/dogImg.txt`, res);
}).then((res)=>{
    console.log(res);
}).catch(err => {
    console.log(err.message + `😅😅`);
});