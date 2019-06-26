
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/
function randColors(){

}

function trollColor(){
  let color = ["red", "blue", "green", "yellow"];
  let randText = color[Math.floor(Math.random() * color.length)];
  let randBg = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".trollBtn").style.color = randText;
  if (randText === randBg) {
    document.querySelector(".trollBtn").style.color = "Black";
  }
  document.querySelector(".trollBtn").style.backgroundColor = randBg;
}
/* Move pos X & Y and rotate the button */
function trollMove(){
  let randPosNum = (Math.floor(Math.random() * 90));
  let moveX = randPosNum + "%";
  let moveY = randPosNum + "%";
  let randomRotate = (Math.floor(Math.random() * 180));
  document.querySelector(".trollBtn").style.left = moveX;
  document.querySelector(".trollBtn").style.top = moveY;
  document.querySelector(".trollBtn").style.transform = "rotate(" + randomRotate + "deg)";
}

/* Define a random number of try before displaying and alert box */
let numTry = (parseInt(Math.floor((Math.random() * 15) + 2)));

/* Listen for mouseover button and then it's Troll Time! */
document.querySelector(".trollBtn").addEventListener("mouseover", () => {
  trollColor();
  trollMove();
  numTry--;
  // console.log ("nombre d'essai restant " + numTry)
  if (numTry === 0){
    let textAlert = ["Do you even try?", "Are you trying to click me?", "I'm over here!"]
    let randTextAlert = textAlert[Math.floor(Math.random() * textAlert.length)];
    numTry = (parseInt(Math.floor((Math.random() * 10) + 1)));
    // console.log ("nombre d'essai deuxieme " + numTry)
   alert(randTextAlert);
  }
})
