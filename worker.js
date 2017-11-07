const random = require('./Random.js');

const worker = function(){
    let id = "w-" + random().digit(8); //an 8-digit worker id number. Example w-12345678
    let wage = random().discreteRangeIn(8,50); //a random number in between 8 and 50
    let hours = random().discreteRangeIn(4,7)*5; //a random number that is either 20, 25, 30, or 35.

    function pay(){//returns an array which holds 3 pieces of information: their daily pay, their weekly pay, and their yearly pay (before taxes)
        let dailyPay = (hours/5)*wage;
        let weeklyPay = hours*wage;
        let yearlyPay = weeklyPay*52;
        return [dailyPay, weeklyPay, yearlyPay];  
    }
};

module.exports = worker;
