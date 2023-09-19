const mongoose = require('mongoose');

/**
 * @desc To connect the app to database using mongo connection URI
 */
async function connectDb() {
	const dbUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@apric.6qac8sb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
	try{
		await mongoose.connect(dbUri);
		console.log("DB connected")
	} catch(error) {
		console.error("Could not connect to db");
		process.exit(1);
	}
}

module.exports = { connectDb };
