var fs=require('fs');
module.exports= function(fname,ext,callback){
    fs.readdir(fname,function(err,list){
        if(err) return callback(err);
        const  filelist=list.filter(item=>item.split('.')[1]===ext);
        //const filterlist =list.filter(item=>path.extna,e(item)===ext)
        callback(null,filelist);
    });
};