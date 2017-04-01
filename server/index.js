const path = require('path')
const express = require('express')
const app = express()

app.set('view engine', 'jade')
app.set('views', __dirname)
app.set('port', (process.env.PORT || 8080))

app.use('/static/build', express.static(path.join(__dirname, '../build')))
app.use('/static/images', express.static(path.join(__dirname, '../images')))

app.get('/', (req, res) => {
  return res.render('index', {})
})

app.listen(app.get('port'), () => {
  console.log('Server ready - http://localhost:' + app.get('port'))
})
