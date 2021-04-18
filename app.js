
let daysH = document.getElementById("date");
let monthH = document.getElementById("month");
let yearH = document.getElementById("year");

let showAge = document.getElementById("show-age");
const btn = document.getElementById("calc-btn");

var today = new Date();
let d = today.getDate();
var m = today.getMonth() + 1;
var y = today.getFullYear();
let maxDays = 0;
let monthNum = 1;

btn.addEventListener("click", (days, month, year) => {

    days = daysH.value;
    month = monthH.value;
    year = yearH.value;

    if (daysH.value == "" || monthH.value == "" || yearH.value == "") {
        return alert("Please enter your date of birth properly to calculate your age")
    }

    console.log(`Current Date : ${d} ${m} ${y}`);

    if (m == 1) { 
        maxDays = 31;
        monthNum = 1;
    }
    else if (m == 2) { 
        maxDays = 28;
        monthNum = 2;
    }
    else if (m == 3) { 
        maxDays = 31;
        monthNum = 3;
    }
    else if (m == 4) { 
        maxDays = 30;
        monthNum = 4;
    }
    else if (m == 5) {
        maxDays = 31;
        monthNum = 5;
    }
    else if (m == 6) { 
        maxDays = 30;
        monthNum = 6;
    }
    else if (m == 7) { 
        maxDays = 31;
        monthNum = 7;
    }
    else if (m == 8) { 
        maxDays = 31;
        monthNum = 8;
    }
    else if (m == 9) { 
        maxDays = 30;
        monthNum = 9;
    }
    else if (m == 10) { 
        maxDays = 31;
        monthNum = 10;
    }
    else if (m == 11) { 
        maxDays = 30;
        monthNum = 11;
    }



    else { 
        maxDays = 31;
        monthNum = 12;
    }



    var ageYears = y - year;

    if (m <= month) {
        m = m + 12;
    }
    var ageMonths = m - month;
    var ageDays = (maxDays - d) + parseInt(days);


    

    console.log(`Your age is ${ageYears} y`); 
        showAge.innerHTML = `Your are ${ageYears} years of age`; 
})
