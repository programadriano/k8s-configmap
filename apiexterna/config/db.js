var mongoose = require('mongoose');

//mongoose.connect(`mongodb://127.0.0.1:32000/db_employees`);
mongoose.connect(`${process.env.MONGO_URL}`);


var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;

