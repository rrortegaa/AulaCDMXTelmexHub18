
var fs = require("fs");

var inicio = fs.readFileSync(process.argv[2]);
var fin = fs.readFileSync(process.argv[3]);

fs.writeFile(process.argv[4],inicio+fin, function(err) {
    if (err) throw err;
    console.log('Guardado');
}
);

console.log("Program Ended")


// process.argv.forEach((val, indice) => {
//     console.log(`${indice}:${val}`);    
// });

// console.log(process.argv);