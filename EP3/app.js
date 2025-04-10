import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for createRoot



//React.createElement => Object => HTMLElement(render);
const heading = React.createElement("h1",{id:"heading" },"Veds is here REPLACED");
console.log(heading);

//React Element 
const jsxHeading =(<h1 className="head">
    Tag using JSR
    </h1>
);
console.log(jsxHeading);


//React Component

const root = ReactDOM.createRoot(document.getElementById("root"));

// Functional Component 

const FuncHeading = () => {
    return <h1>This is a Functional Component Heading</h1>
}

root.render(<FuncHeading />);  
