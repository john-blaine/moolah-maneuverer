var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_39jpsg55:ko388un77306q8kg27tprern14@ds137100.mlab.com:37100/heroku_39jpsg55');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var financialCalcLog = mongoose.Schema({
  username: String,
  cashInflows: Number,
  initialInvestment: Number,
  discountRate: Number,
  numberOfPeriods: Number,
  netPresentValue: Number,
  dateCreated: {
    type: Date,
    default: Date.now
  }
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
    if (err) {return console.error(err);}
    else { console.log('Calculation saved!'); }
  });
};

var retrieve = (username, callback) => {
  var query = NPVCalc.find({ 'username' : username});
  query.select({});
  query.sort({ dateCreated: -1 });
  query.limit(10);
  query.exec(function(err, calcs) {
    callback(calcs);
  });
};

module.exports = {
  save : save,
  retrieve : retrieve
};

