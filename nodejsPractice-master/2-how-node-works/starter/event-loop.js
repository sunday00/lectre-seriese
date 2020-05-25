const fs = require('fs');

setTimeout(()=>{ console.log('timer end'); }, 0);
setImmediate(()=>{ console.log('immediate end'); });

fs.readFile("./test-file.txt", ()=>{
    console.log("io end");

    console.log("==========");

    setTimeout(()=>{ console.log('timer2 end'); }, 0);
    setTimeout(()=>{ console.log('timer3 end'); }, 3000);
    setImmediate(()=>{ console.log('immediate2 end'); });

    process.nextTick(()=>{ console.log("next thick"); });
});

console.log("outside end");