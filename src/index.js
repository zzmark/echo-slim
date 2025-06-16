const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser())

app.get('/echo', (req, res) => {
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

app.post('/echo', (req, res) => {
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

const static = express.static('./root');

app.get('/*', (req, res, next) => {
  console.log('============ start ===========')
  console.log('Time: ', new Date())
  console.log('Method: ', req.method)
  console.log('URL: ', req.url)
  console.log('Headers: ', req.headers)
  console.log('Params: ',req.params)
  console.log('Query: ', req.query)
  console.log('Body: ', req.body)
  console.log('============= end ===========')
  static(req, res, next);
});
app.post('/*', (req, res) => {
  console.log('============ start ===========')
  console.log('Time: ', new Date())
  console.log('Method: ', req.method)
  console.log('URL: ', req.url)
  console.log('Headers: ', req.headers)
  console.log('Params: ',req.params)
  console.log('Query: ', req.query)
  console.log('Body: ', req.body)
  console.log('============= end ===========')
  res.send('{}')
});

const port = 43434
console.log('start on ', port)
app.listen(port)
