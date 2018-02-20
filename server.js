const express = require('express')
const lodash = require('lodash')
const app = express()

//EJS is accessed by default in the views directory
// app.set -> Assigns SETTING NAME to VALUE. 
//    You may store any value that you want, but certain names can be used to configure the behavior of the server. 
app.set('view engine', 'ejs')

//to use the css
app.use(express.static('public'));


//specifies root url ('/')
app.use(require('./controllers'));



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})