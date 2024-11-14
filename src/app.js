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

  let indicepronoun = Math.floor(Math.random() * pronoun.length);
  let indiceadj = Math.floor(Math.random() * adj.length);
  let indicenoun = Math.floor(Math.random() * noun.length);
  let indicecom = Math.floor(Math.random() * com.length);

  document.querySelector("#domain-name").innerHTML =
    pronoun[indicepronoun] + adj[indiceadj] + noun[indicenoun] + com[indicecom];
};
