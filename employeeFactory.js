const worker = require('./worker.js');
const manager = require('./manager.js');
const divisionHead = require('./divisionHead.js');
const contractor = require('./contractor.js');

const employeeFactory = function(type){
    function create(type){
        if(type == "worker"){
            return new worker();
        }
        else if(type == "manager"){
            return new manager();
        }
        else if(type == "divisionHead"){
            return new divisionHead();
        }
        else if(type == "contractor"){
            return new contractor();
        }
    }


};

module.exports = employeeFactory;
