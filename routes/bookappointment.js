const route = require('express').Router()

route.get('/',(req,res)=>{
	res.render('bookappointment.ejs')
	
})


module.exports = route