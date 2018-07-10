const  express = require("express")
let app = express()

let controller = require('./controller.js')

app.get('/', function(request, response) {
    response.send('Hola terricola')
})
app.get('/adios', function(request, response) {
    response.send('Adios terricola')
})
app.get('/ayuda', function(request, response) {
    response.send('Ayuda terricola')
})
app.get('/json', function(request, response) {
    let objJson = {
        hola: 'amigos',
        como: ['les','ha','ido'],
        que: {
            cuenta: 'la mala',
            vida: '?'
        }
    }

// Url con parametros
app.get('/saludo/:quien', function(req, res) {
    res.send('Hola estimado'* req.params.quien)
})


    response.send(objJson)
    //response.send('Hola terricola')
})
//app.listen recibe 2 parametros, un numero que es el puerto donde se conectara y una funcion callback que ejecutara cuando estoy corriendo 
app.listen(3000, () => console.log('Ejemplo de la app escuchando en el puerto 3000'))
