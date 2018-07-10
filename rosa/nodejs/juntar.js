var fs = require("fs");

var inicio = fs.readFileSync('inicio.txt');
var fin = fs.readFileSync('fin.txt');

console.log(inicio.toString()); // Comprobar que si lo estoy leyendo
console.log(fin.toString()); // Comprobar que si lo estoy leyendo

/*
fs.readFile('inicio.txt', function (err, inicio) {
    if (err) return console.error(err);
    console.log(inicio.toString());
});
fs.readFile('fin.txt', function (err, fin) {
    if (err) return console.error(err);
    console.log(fin.toString());
});
*/

fs.writeFile('juntos.txt',inicio+fin, function(err) {
    if (err) throw err;
    console.log('Guardado');
}
);

console.log("Program Ended")
