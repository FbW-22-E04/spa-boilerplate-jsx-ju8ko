import React from "react";
import { createRoot } from "react-dom/client";
//we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render
const name = "James";
const age = "12";
let output = (
  <span>
    {name} is {age}years old
  </span>
);

// WHERE: A DOM element that will contain the entire react generated html
const container = document.getElementById("root");

//create a root
const root = createRoot(container);

//render app to root
root.render(output);
