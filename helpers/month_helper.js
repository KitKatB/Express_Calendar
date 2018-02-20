//turn month number (0-11) in to month name
var toName = function (monthNumber) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    return monthNames[monthNumber].toString();
}

module.exports = toName;