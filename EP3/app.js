import React from "react";
import ReactDOM from "react-dom/client"; 


//React.createElement => object =>HTMLelement(render)

// const heading = React.createElement( "h1", { id : "heading"} , "EPISODE 3");
// const root = ReactDOM.createRoot(document.getElementById("root"));


// Using JSX - is not HTML in JS

const jsxHeading = () =>  <h1 id ="heading" className="head" tabIndex="5">Vedansh creating react using JSR lesgoo</h1>;


//React Components - Functional and Class-Based Components 

// 1. Functional Component

const elem =   <span>React element inside React element</span>;


const HeadingComponent  = (
    <div> 
    {elem}
    <h1>Functional Freaking Component</h1>
    </div>
)

  
const Title = () => (
    <h1 className="titleHead">
        Renders title component inside the heading component</h1>
);


const FuncHeading = () => (
    <div>
    {elem}
    {HeadingComponent}
    {Title()} 
    <Title/>
    <Title></Title>
    <h1>Functional Component is Being Rendered</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FuncHeading />);