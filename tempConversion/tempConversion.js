const ftoc = function(tempF) {

  let celNum = (tempF - 32) * (5/9);

  if(tempF == 32){
    return 0;
  } else {
    let celsius = Math.round(celNum * 10) / 10;
    return celsius;
  }
  
}

const ctof = function(tempC) {

  let fahNum = (tempC * 9/5) + 32;

  if(tempC == 0){
    return 32;
  } else {
    let fahrenheit = Math.round(fahNum * 10) / 10;
    return fahrenheit;
  }
  

  
  

}

module.exports = {
  ftoc,
  ctof
}
