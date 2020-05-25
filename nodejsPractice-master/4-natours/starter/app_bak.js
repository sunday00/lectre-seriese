const express = require('express');
const app_bak = express();


app_bak.get(`/`, (req, res)=>{
    // res.status(200).send(`Hello express`);
    res.status(200).json({
        message : `hello express`,
        app: `Natours`
    });
});

app_bak.post(`/`, (req, res)=>{
    res.status(200).json({
        message : `hello post`,
        app: `POPOPO`
    });
});


const cnf = {
    port: 8000
};

app_bak.listen(cnf.port, ()=>{
    console.log(`now running on ${cnf.port}`);
});
