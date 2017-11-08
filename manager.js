const random = require('./Random.js');

const manager = function(){
    let id = "m-" + random().digit(8); 
    let workers = random().discreteRangeIn(4,20); 
    let baseSalary = random().discreteRangeIn(4,9)*10000;

    function pay(){
        let yearlyPay = baseSalary;
        if(workers <=10){
            yearlyPay += workers*250;
        }
        else if(workers > 10){
            yearlyPay += 2500 + (workers-10)*400;
        }
        let weeklyPay = yearlyPay/52;
        let dailyPay = weeklyPay/7;
        
        
        return [yearlyPay, weeklyPay, dailyPay];  
    }
};

module.exports = manager;
