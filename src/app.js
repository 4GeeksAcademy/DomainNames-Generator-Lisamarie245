/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let com = [".com", ".net", ".io", ".us"];

  let DomainName = "";

pronoun.map ((itempronoun) => {
  adj.map((itemadj) => {
    noun.map((itemnoun) => {
      com.map((itemcom) => {

        DomainName +=`<li class="list-group-item">${itempronoun}${itemadj}${itemnoun}${itemcom}</li>`
      } )
    } )
  } )
})

  document.querySelector("#domain-name").innerHTML =
    DomainName
};
