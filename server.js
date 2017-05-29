const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/data',(req,res)=>{
	res.json(req.body)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



