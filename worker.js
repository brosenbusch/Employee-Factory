const random = require('./Random.js');

const worker = function(){
    let id = "w-" + random().digit(8); //an 8-digit worker id number. Example w-12345678
    let wage //a random number in between 8 and 50
    let hours //a random number that is either 20, 25, 30, or 35.

    pay() //returns an array which holds 3 pieces of information: their daily pay, their weekly pay, and their yearly pay (before taxes)

};

module.exports = moduleName;
