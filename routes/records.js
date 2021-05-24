const route = require('express').Router()

const {MongoClient} = require('mongodb')
const MONGO_URL = 'mongodb://localhost:27017'
const DB_NAME = 'vshospital'

route.get('/',(req,res)=>{
	res.render('records.ejs')
})
route.post('/',(req,res)=>{
	var phone = req.body.phone
	var dob = req.body.dob
	// console.log(phone)
	// console.log(dob)

	// find fromd db
	async function findRecords(){
		const client = await MongoClient.connect(MONGO_URL)
		const vshospital = client.db(DB_NAME)
		const appointmentCollect = vshospital.collection('appointment')
		const consultCollect = vshospital.collection('consultonline')
		const labCollect = vshospital.collection('booklab')

		var appointmentResult = await appointmentCollect.find({phone: phone,dob: dob}).toArray()
		var consultResult = await consultCollect.find({phone: phone,dob: dob}).toArray()
		var labResult = await labCollect.find({phone: phone,dob: dob}).toArray()
		console.log(JSON.stringify(appointmentResult))
		// console.log(JSON.stringify(consultResult))
		// console.log(JSON.stringify(labResult))
		res.render('bookdetails.ejs',{appointments: appointmentResult,consultonlines: consultResult,labs: labResult})
	}
	findRecords()
})


module.exports = route