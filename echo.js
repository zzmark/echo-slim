const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser())

app.get('/echo', function (req, res) {
  console.log('============ start ===========')
  const a = {
	  time: new Date(),
	  method: req.method,
	  url: req.url,
	  headers: req.headers,
	  param: req.params,
	  query: req.query,
	  body: req.body
  }
  console.log(a)
  console.log('============= end ===========')
  res.send(a)
})

app.post('/echo', function (req, res) {
  console.log('============ start ===========')
  const a = {
	  time: new Date(),
	  method: req.method,
	  url: req.url,
	  headers: req.headers,
	  param: req.params,
	  query: req.query,
	  body: req.body
  }
  console.log(a)
  console.log('============= end ===========')
  res.send(a)
})

app.get('/*', function (req, res) {
  console.log('============ start ===========')
  console.log('Time: ', new Date())
  console.log('Method: ', req.method)
  console.log('URL: ', req.url)
  console.log('Headers: ', req.headers)
  console.log('Params: ',req.params)
  console.log('Query: ', req.query)
  console.log('Body: ', req.body)
  console.log('============= end ===========')
  res.send('Hello World')
})
app.post('/*', function (req, res) {
  console.log('============ start ===========')
  console.log('Time: ', new Date())
  console.log('Method: ', req.method)
  console.log('URL: ', req.url)
  console.log('Headers: ', req.headers)
  console.log('Params: ',req.params)
  console.log('Query: ', req.query)
  console.log('Body: ', req.body)
  console.log('============= end ===========')
  res.send('Hello World')
})



const port = 43434
console.log('start on ', port)
app.listen(port)
