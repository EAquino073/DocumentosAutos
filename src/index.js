const express = require('express')
const path = require('path')
    
const app = express()

//import routes
const routes = require('./routes/routes')

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended: false}))

//routes
app.use('/', routes)


app.listen(app.get('port'), () =>{
    console.log('server in the port', app.get('port'))
})