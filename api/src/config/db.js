var mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URL}`);

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: String,
    mail: String,
    role: String
});


var Person = mongoose.model('Person', PersonSchema);
module.exports = Person;

