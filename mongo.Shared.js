// const { connect } = require("http2");
const {MongoClient} = require("mongodb");
// const { connected } = require("process");

const client = new MongoClient(process.env.MONGODB_URL);

const mongo = {
    db : null,
    async connect() {
        await client.connect();
        console.log("Mongo connected");

        this.db = client.db(process.env.MONGODB_NAME);
        console.log(`${process.env.MONGODB_NAME} is selected`);
    }
}

module.exports = mongo;