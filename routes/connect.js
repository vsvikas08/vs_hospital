const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'vshospital';

(async() => {
	const client = await MongoClient.connect(MONGO_URL);
	const vshospital = client.db(DB_NAME);
	console.log(vshospital);
})()