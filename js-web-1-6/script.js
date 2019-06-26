
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

import imgs from "./img/*.*"; // make an array with images

// browse the array and not taking care of the ID of each element
let imgCat = [];
 for (let x in imgs){
   imgCat = Object.values(imgs);
 }
imgCat = imgCat.map(v => Object.values(v)[0]); // just take the value and not the key of each object

let arrLength = imgCat.length;

function createGallery(){
  /* create a div gallery for displaying pictures */
  let y = document.createElement("DIV");
  y.setAttribute("class", "gallery");
  document.querySelector(".content").appendChild(y);
  let z = []; // create an empty array for stock each random number
  for(let numImg = 0; numImg < arrLength; numImg++){
    /* select a random number for the array*/
    let i;
    do {
      i = Math.floor((Math.random() * arrLength));
    } while(z.includes(i)); // check if the number is already in the array
    z.push(i); // stock the number in the array


    /* create the number of images in the div gallery */
    var x = document.createElement("IMG");
    x.setAttribute("src", imgCat[i]);
    x.setAttribute("class", "img");
    document.querySelector(".gallery").appendChild(x);
  }
}

/* Button RandomCatizer */
let show = 0;
document.querySelector(".randBtn").addEventListener("click", () => {
  if (show === 0){
    createGallery();
    show = 1;
  }
  else if (show === 1){
    let element = document.querySelector(".gallery");
    element.parentNode.removeChild(element);
    createGallery();
  }
});
