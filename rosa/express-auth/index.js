/*
let express = require('express')
let app = express()
let bodyParser = require("body-parser")

const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

let controller = require('./controller')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/blogs', controller.findAllBlogs)
app.get('/blog/:num', controller.findBlogByNum)
app.get('/blog-new', controller.renderNewBlog)
app.get('/', controller.renderHome)
app.post('/blog', controller.insertBlog)
*/

const jwt = require('jsonwebtoken')

// Correr primero
// jwt.sign(
//     {name: 'Rosa', credentials: 'user'},
//     'llave-secretisima',
//     function (err, token) {
//         if (err) console.log(err)
//             console.log(token)
//     }
// )

// Correr segundo
jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9zYSIsImNyZWRlbnRpYWxzIjoidXNlciIsImlhdCI6MTUzMTc3MDUxOX0.MD5dMnXZK6ZNIAyJG4bPCwRzuHACRJpzyORuGClSlFg','llave-secretisima', function (err, payload) {
        if (err) console.log(err)
            console.log(payload)
    }
)

//app.listen(3000, function () {console.log('Connected in port 3000')})
