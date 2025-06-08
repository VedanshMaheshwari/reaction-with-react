import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id: "child1", key: "child1"},[
        React.createElement("h1", {key: "h1-1"},"H1 Tag this is inside an array"),
        React.createElement("h2", {key: "h2-1"},"H2 Tag this is inside an array") 
    ]),
    React.createElement("div",{id: "child2", key: "child2"},[
        React.createElement("h1", {key: "h1-2"},"H1 Tag this is inside an array"),
        React.createElement("h2", {key: "h2-2"},"H2 Tag this is inside an array") 
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
