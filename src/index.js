import React from "react";
import ReactDOM from "react-dom";

const hourOfDay = new Date().getHours();

if (hourOfDay >= "0" && hourOfDay < "12") {
  var say = "Good Morning";
  var customStyle = { color: "red" };
} else if (hourOfDay >= "12" && hourOfDay < "18") {
  say = "Good Afternoon";
  customStyle = { color: "green" };
} else {
  say = "Good Evening";
  customStyle = { color: "blue" };
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {say}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
