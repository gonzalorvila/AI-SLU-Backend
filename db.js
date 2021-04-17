const fs = require('fs');

let config = fs.readFileSync('config.json');
config = JSON.parse(config);
const mongoose = require('mongoose')


let env = 'developemnt'
const mongo_username = config[env].mongo_username
const mongo_password = config[env]['mongo_password']
const mongo_uri = config[env]['mongo_uri']
const mongo_db = config[env]['mongo_db']
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@${mongo_uri}/${mongo_db}?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
module.exports = db;


