const leapYears = function(year) {

    // What is a century year? It's a year that is divisble by 100
    // If it's a century year, the year must then be divisble by 400 to be a leap year
    // let centuryYear = (year % 100 === 0);

    if((year % 100 === 0 && year % 400 === 0) || (year % 100 != 0 && year % 4 === 0)){
        return true;
    } else {
        return false;
    }

}

module.exports = leapYears
