const express = require('express')
const bookApp = require('./routes/bookappointment')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(__dirname+'/public'))


app.use('/bookappointment',bookApp)

app.listen(8080,()=>{
	console.log("Server is running on http://localhost:8080")
})
