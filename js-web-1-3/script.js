// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.querySelector("#butSend").addEventListener("click", () => {
var name = (document.getElementById("name").value);
var power = (document.getElementById("power").value);
var motiv = (document.getElementById("motiv").value);
var plan = (document.getElementById("plan").value);
var butReturn = `<button class="butReturn" id="butReturn" onClick="window.location.reload()">Try again</button>`
var f = document.querySelector(".form");
f.parentNode.removeChild(f);
// console.log("Your super villain name is " + name + " and your power is " + power + ". " + "You want to " + motiv + " and you plan to do it like this: " + plan);
document.getElementById("nameVillain").innerHTML = name;
document.getElementById("powerVillain").innerHTML = power;
document.getElementById("motivVillain").innerHTML = "Want to " + motiv;
document.getElementById("planVillain").innerHTML = "What's the plan: " + plan;
document.getElementById("return").innerHTML = butReturn;
document.querySelector(".result").style.width = "80%";
});
