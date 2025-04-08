import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for createRoot


//React Element 
//React.createElement => Object => HTMLElement(render);

const heading = React.createElement("h1",
    {id:"heading"},
    "Veds is here REPLACED"
);
 

const jsxHeading =<h1>Tag using JSR</h1>;

 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  
