const fileSystem = require('fs');
fileSystem.readFile('./hello.txt' , 'utf8' , (err,data)=>{
    if(err){
        console.log('Error : ',err);
    }else{
        console.log('Data : ',data);
    }
});