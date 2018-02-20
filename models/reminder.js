

//Create reminder
exports.createReminder = function(date,title,detail){
    var date = date;
    var detail = detail.toString();

    //post to database

};


//get particular reminder
exports.getReminder = function(date,title){
    //interact with database to retrieve and return a reminder object
}


//get all reminders for the day
exports.getReminders = function(date){
    //interact with database to retrieve and return a list of reminder objects
}

exports.removeReminder = function(date,title){
    //interact with database to delete reminder entry
}

