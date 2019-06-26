
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/


import axios from 'axios';


/* Fct to get a random url of an image of a cat */
function getCat (){
  let cycler = document.querySelector(".cycler");

  axios.get('https://aws.random.cat/meow')
    .then(function (response){
      cycler.src = response.data.file;
    })
}
getCat()
setInterval(getCat, 1000);
