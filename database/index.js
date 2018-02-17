var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/saver');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var financialCalcLog = mongoose.Schema({
  username: String,
  cashInflows: Number,
  initialInvestment: Number,
  discountRate: Number,
  numberOfPeriods: Number,
  netPresentValue: Number
});

var NPVCalc = mongoose.model('NPVCalc', financialCalcLog);

var save = (calc) => {
  let newCalc = new NPVCalc({
    username: calc.username,
    cashInflows: calc.cashInflows,
    initialInvestment: calc.initialInvestment,
    discountRate: calc.discountRate,
    numberOfPeriods: calc.numberOfPeriods,
    netPresentValue: calc.netPresentValue
  });
  newCalc.save(function(err, calc) {
    if (err) {return console.error(err)}
    else { console.log('Calculation saved!'); }
  });
};

var retrieve = (username, callback) => {
  debugger;
  var query = NPVCalc.find({ 'username' : username});
  query.select({});
  query.limit(10);
  query.exec(function(err, calcs) {
    callback(calcs);
  });
};

module.exports = {
  save : save,
  retrieve : retrieve
};

