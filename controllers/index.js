var express = require('express');
var router = express.Router();
var lodash = require('lodash');
var month_helper = require('../helpers/month_helper');

//specifies root url ('/')
router.get('/', function (req, res) {
    //Instead of using res.send, we use res.render when working with a templating language.
    var today = new Date();
    console.log(today);

    //find last day of the month by going to next month and minus 1 day
    var intDate = new Date(today.getFullYear(),today.getMonth()+1,1);
    var lastDate = new Date(intDate-1);
    ///////////////////////////////////////

    //fill and render calendar template
    var daysList = lodash.range(1,lastDate.getDate()+1,1);
    console.log(daysList);
    
    //find how many days to shift the starting date of the month
    var firstDate = new Date(today.getFullYear(),today.getMonth(),1);
    var shiftList = lodash.range(0,firstDate.getDay()-1,1);
    console.log(shiftList);


    res.render('calendar',{
      month: today.getMonth(),
      days: daysList,
      shift: shiftList,
      monthName: month_helper(today.getMonth())
    });
  })


module.exports = router;