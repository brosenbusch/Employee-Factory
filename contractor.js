const random = require('./Random.js');

const constractor = function(){
    let id = "c-" + random().digit(8); 
    let startDate = random().digit(4)+"/"+random().digit(2)+"/"+random().digit(2);
    let endDate = random().digit(4)+"/"+random().digit(2)+"/"+random().digit(2);
    
    function pay(){
        return random().discreteRangeIn(500,9000);
    }
};

module.exports = contractor;
