const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use('/',express.static(__dirname+'/public'))


app.listen(8080,()=>{
	console.log("Server is running on http://localhost:8080")
})
