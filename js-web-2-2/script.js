// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

import axios from 'axios';

let apiUrl = "https://api.punkapi.com/v2/beers/";
let numBeerMax = 12;
let beers;
async function createGallery(){
  let response = await axios.get(apiUrl);
  beers = response.data; // ask only once for the data from api
    for(let n = 0; n < numBeerMax; n++){
      let x = document.createElement("div");
      x.setAttribute("class","card-beer");
      x.setAttribute("id","beers" + n)
      document.querySelector(".gallery").appendChild(x);

      let name = document.createElement("div");
      name.setAttribute("class","beer-name");
      name.setAttribute("id","beer" + n);
      name.textContent = beers[n].name;
      document.querySelector("#beers" + n).appendChild(name);

      let tag = document.createElement("div");
      tag.setAttribute("class","beer-tag");
      tag.setAttribute("id", "beer" + n);
      tag.textContent = beers[n].tagline;
      document.querySelector("#beers" + n).appendChild(tag);

      let year = document.createElement("div");
      year.setAttribute("class","beer-year");
      year.setAttribute("id","beer" + n);
      year.textContent = ("First brewed in" + " " + beers[n].first_brewed);
      document.querySelector("#beers" + n).appendChild(year);

      let image = document.createElement("img");
      image.setAttribute("class","beer-image");
      image.setAttribute("id","beer" + n);
      image.src = beers[n].image_url;
      document.querySelector("#beers" + n).appendChild(image);
    }
}


createGallery()
