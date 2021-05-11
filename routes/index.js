const route = require('express').Router()

route.get('/',()=>{
	console.log("This is index route")
})


module.exports = route