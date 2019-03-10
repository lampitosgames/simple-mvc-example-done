const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    trim: true
  },
  age: {
    type: Number,
    min: 0
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

DogSchema.statics.findByName = (name, callback) => {
  return DogModel.findOne({ name, }, callback);
}
DogSchema.statics.readAllDogs = (callback) => {
  return DogModel.find(callback);
}

DogModel = mongoose.model('Dog', DogSchema);

module.exports = { DogModel, DogSchema };