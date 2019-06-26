
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import imgs from "./img/*.jpg"; // make an array with images

// browse the array and not taking care of the ID of each element
let imgCat = [];
 for (let x in imgs){
   imgCat = Object.values(imgs);
 }
console.log(imgs)
// Set number of images
let arrLength = imgCat.length;

/* setTimeout function */

function nextCat(i){
  if(i === imgCat.length){
    i = 0;
  }
  let cycler = document.querySelector(".cycler");
  cycler.src = imgCat[i]
  i++;
  window.setTimeout(nextCat, 1000, i);
}

nextCat(0);

/* Async Function
   For instructionnal purpose */

// function timer(ms) {
//  return new Promise(res => setTimeout(res, ms));
// }
// async function showCat(){
//   for (let i = 0; true; i++){
//     let cycler = document.querySelector(".cycler");
//     cycler.src = imgCat[i];
//     await timer(500);
//       if(i === arrLength -1){
//         i = -1;
//       }
//     }
// }
// showCat();
