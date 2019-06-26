
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

/* make and array for month, year and date */
/* Display Days */
const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14",
  "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
let selectD = document.getElementById("selectDay");
for(let index in days) {
    selectD.options[selectD.options.length] = new Option(days[index], index);
}

/* Display Months */
const months = [1,2,3,4,5,6,7,8,9,10,11,12];
let selectM = document.getElementById("selectMonth");
for(let index in months) {
    selectM.options[selectM.options.length] = new Option(months[index], index);
}

/* Display Years */
let max = new Date().getFullYear(); // get the actual year
let min = max - 100; // can be changed for the max age
let selectY = document.getElementById("selectYear");
for(let i = max; min<=i; min++){
  let opt = document.createElement('option')
  opt.value = min;
  opt.innerHTML = min;
  selectY.appendChild(opt);
}

/* function who get the selected element, calculate them and show them */

function getResult(){
  let resultYear = document.getElementById("selectYear");
  let resultMonth = document.getElementById("selectMonth");
  let resultDay = document.getElementById("selectDay");

  let finalYear = resultYear[resultYear.selectedIndex].value;
  let finalMonth = resultMonth[resultMonth.selectedIndex].text;
  let finalDay =  resultDay[resultDay.selectedIndexvalue].text;

  document.getElementById("showResult").innerHTML = finalYear + " " + finalMonth + " " + finalDay;

  // document.getElementById("showResult").innerHTML = (
  //   resultDay[resultDay.selectedIndex].text + " " +
  //   resultMonth[resultMonth.selectedIndex].text + " " +
  //   resultYear[resultYear.selectedIndex].value
  // );
  // console.log(resultDay + resultYear + resultMonth)
}

document.getElementById("selectYear").addEventListener("change", ()=>{getResult()});
document.getElementById("selectMonth").addEventListener("change", ()=>{getResult()});
document.getElementById("selectDay").addEventListener("change", ()=>{getResult()});
