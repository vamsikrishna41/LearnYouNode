const mymodule=require('./mymodule.js');
mymodule(process.argv[2],process.argv[3],function(err,data){
    if(err) throw err;
    for(let i=0;i<data.length;i++){
        console.log(data[i]);
    }
});