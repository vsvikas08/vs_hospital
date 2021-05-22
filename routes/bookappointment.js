const route = require('express').Router()

route.get('/',(req,res)=>{
	res.render('bookappointment.ejs')	
})
route.post('/',(req,res)=>{
	var name = req.body.name
	var email = req.body.email
	var phone = req.body.phone
	var sex = req.body.sex
	var dob = req.body.dob
	var address = req.body.address
	var cities = req.body.selectCities
	var specialities = req.body.selectSpecialities
	var appointment = {name: name,email: email,phone: phone,sex: sex,
					   dob: dob,address: address,cities: cities,specialities: specialities}
	console.log(appointment)
	res.render('details.ejs',{appointment: appointment})
})

route.get('/online',(req,res)=>{
	res.render('consultonline.ejs')
})

route.get('/lab',(req,res)=>{
	res.render('booklab.ejs')
})



module.exports = route