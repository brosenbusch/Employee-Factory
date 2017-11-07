const random = require('./Random.js');

const manager = function(){
    let id = "m-" + random().digit(8); 
    let workers = random().discreteRangeIn(4,20); 
    let baseSalary = random().discreteRangeIn(4,9)*10000;

    function pay(){
        if(workers <=10){
            workers*250
        }
        else if(workers > 10){
            workers 
        }
        let dailyPay = (hours/5)*wage;
        let weeklyPay = hours*wage;
        let yearlyPay = weeklyPay*52;
        
        return [dailyPay, weeklyPay, yearlyPay];  
    }
};

module.exports = worker;
