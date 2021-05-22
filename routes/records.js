const route = require('express').Router()

route.get('/',(req,res)=>{
	res.render('records.ejs')
})


module.exports = route