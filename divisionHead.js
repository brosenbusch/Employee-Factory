const random = require('./Random.js');

const divisionHead = function(){
    let id = "d-" + random().digit(8); 
    let managers = random().discreteRangeIn(1,10);
    let workers = random().discreteRangeIn(20,300); 
    let baseSalary = random().discreteRangeIn(2,5)*50000;

    function pay(){
        let yearlyPay = baseSalary;
        yearlyPay += managers*10000;
        yearlyPay += workers*50;
        let weeklyPay = yearlyPay/52;
        let dailyPay = weeklyPay/7;
        
        
        return [yearlyPay, weeklyPay, dailyPay];  
    }
};

module.exports = divisionHead;
