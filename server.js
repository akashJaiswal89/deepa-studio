const express = require('express')
const path = require('path')
const expressLayout = require('express-ejs-layouts')

const app = express()
const port = process.env.PORT || 200

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('views', path.join(__dirname, './front/views'))
app.use(expressLayout)
app.set('view engine', 'ejs')

require('./routes/wab.js')(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

})