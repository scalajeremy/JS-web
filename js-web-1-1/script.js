// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

document.querySelector("#butblue").addEventListener("click", () => {
  document.querySelector(".blackbox").style.backgroundColor = "blue";;
});
document.querySelector("#butred").addEventListener("click", () => {
  document.querySelector(".blackbox").style.backgroundColor = "red";;
});
document.querySelector("#butgreen").addEventListener("click", () => {
  document.querySelector(".blackbox").style.backgroundColor = "green";;
});
document.querySelector("#butreset").addEventListener("click", () => {
  document.querySelector(".blackbox").style.backgroundColor = "#16232E";;
});
