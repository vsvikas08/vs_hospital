const route = require('express').Router()

route.get('/',(req,res)=>{
	res.render('bookappointment.ejs')	
})

route.get('/online',(req,res)=>{
	res.render('consultonline.ejs')
})

route.get('/lab',(req,res)=>{
	res.render('booklab.ejs')
})


module.exports = route