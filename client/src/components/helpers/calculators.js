var netPresentValue = function(initialInvestment,cashInflows, numberOfPeriods, discountRate) {

  return (cashInflows * ((1 - (Math.pow((1+discountRate), -numberOfPeriods))) / discountRate) - initialInvestment);
};

module.exports = netPresentValue;