// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

/* Addition */
document.querySelector("#butadd").addEventListener("click", () => {
  var x = parseInt(document.getElementById("num1").value);
  var y = parseInt(document.getElementById("num2").value);
  var result = x + y;
  console.log("Résultat est " + result);
  document.getElementById("result").innerHTML = result;
});

/* Substraction */
document.querySelector("#butsub").addEventListener("click", () => {
  var x = parseInt(document.getElementById("num1").value);
  var y = parseInt(document.getElementById("num2").value);
  var result = x - y;
  console.log("Résultat est " + result);
  document.getElementById("result").innerHTML = result;
});

/* Multiplication */
document.querySelector("#butmult").addEventListener("click", () => {
  var x = parseInt(document.getElementById("num1").value);
  var y = parseInt(document.getElementById("num2").value);
  var result = x * y;
  console.log("Résultat est " + result);
  document.getElementById("result").innerHTML = result;
});

/* Division */
document.querySelector("#butdiv").addEventListener("click", () => {
  var x = parseInt(document.getElementById("num1").value);
  var y = parseInt(document.getElementById("num2").value);
  var result = x / y;
  console.log("Résultat est " + result);
  document.getElementById("result").innerHTML = result;
});
