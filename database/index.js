var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/saver');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var financialCalcLog = mongoose.Schema({
  username: String,
  cashInflows: Number,
  initialInvestment: Number,
  discountRate: Number,
  numberOfPeriods: Number
});

var NPVCalc = mongoose.model('NPVCalc', financialCalcLog);

