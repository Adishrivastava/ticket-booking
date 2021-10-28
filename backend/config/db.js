const mongoose = require('mongoose');

const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

client.connect((err) => {
	const collection = client.db('test').collection('devices');
	// perform actions on the collection object
	client.close();
});

const connectDB = async () => {
	console.log(process.env.MONGO_URI);

	await mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
		})
		.then((conn) => {
			console.log(conn.connection.host);
		})
		.catch((err) => {
			console.log('ERR -> ', err);
		});
};

module.exports = connectDB;
