const route = require('express').Router()

const {MongoClient} = require('mongodb')
const MONGO_URL = 'mongodb://localhost:27017'
const DB_NAME = 'vshospital'

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
	let date = new Date()
	let  month = date.getMonth()+1
	let day = date.getDate()
	let year = date.getFullYear()
	let hr = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let today = day + "-" + month + "-" + year + "  " + hr + ":" + min + ":" + sec
	var appointment = {name: name,email: email,phone: phone,sex: sex,
					   dob: dob,address: address,cities: cities,specialities: specialities,date: today}
	// console.log(appointment)
	async function addAppointment(){
		// console.log(appointment)
		const client = await MongoClient.connect(MONGO_URL)
		const vshospital = client.db(DB_NAME)
		const appointmentCollect = vshospital.collection('appointment')
		const result = await appointmentCollect.insertOne(appointment)
		console.log(result)
		res.render('details.ejs',{appointment: appointment})
	}
	addAppointment()
	
})

route.get('/online',(req,res)=>{
	res.render('consultonline.ejs')
})

route.get('/lab',(req,res)=>{
	res.render('booklab.ejs')
})



module.exports = route