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
					   dob: dob,address: address,location: cities,specialities: specialities,date: today}
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
route.post('/online',(req,res)=>{
	var name = req.body.name
	var phone = req.body.phone
	var email = req.body.email
	var sex = req.body.sex
	var dob = req.body.dob
	var specialities = req.body.selectSpecialities
	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth()+1
	let year = date.getFullYear()
	let hr = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	let dd = day + "-" + month + "-" + year + "  " + hr + ":" + min + ":" + sec
	var consultOnline = {name: name,phone: phone,email: email,sex: sex,dob: dob,specialities: specialities,date: dd,location: 'online'}
	

	async function addConsultonline(){
		console.log(consultOnline)
		const client = await MongoClient.connect(MONGO_URL)
		const vshospital = client.db(DB_NAME)
		const consultCollect = vshospital.collection('consultonline')
		const result = await consultCollect.insertOne(consultOnline)
		console.log(result)
		res.render('details.ejs',{appointment: consultOnline})
	}
	addConsultonline()
})

route.get('/lab',(req,res)=>{
	res.render('booklab.ejs')
})
route.post('/lab',(req,res)=>{
	var name = req.body.name
	var phone = req.body.phone
	var email = req.body.email
	var test = req.body.selectTest
	var sex = req.body.sex
	var dob = req.body.dob
	var city = req.body.selectCities
	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth()
	let year = date.getFullYear()
	let hr = date.getHours()
	let min = date.getMinutes()
	let sec = date.getSeconds()
	var dd = day + "-" + month + "-" + year + "  " + hr + ":" + min + ":" + sec
	var lab = {name: name,email: email,sex: sex, phone: phone, specialities: test, dob: dob, date: dd, location: city}
	// console.log(lab)

	// insert in db
	async function addLab(){
		const client = await MongoClient.connect(MONGO_URL)
		const vshospital = client.db(DB_NAME)
		const labCollect = vshospital.collection('booklab')
		const result = await labCollect.insertOne(lab)
		console.log(result)
		res.render('details.ejs',{appointment: lab})
	}
	addLab()
})



module.exports = route