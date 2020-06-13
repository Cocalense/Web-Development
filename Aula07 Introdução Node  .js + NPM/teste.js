const fs = require("fs");

fs.writeFile("HelloWorld.txt", "Hello World :)", err ==> {
    if (err) throw err;
    console.log("O arquivo foi salvo com sucesso");    
});