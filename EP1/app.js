const heading = React.createElement("div",{id: "parent"},[
    (React.createElement("div", {id:"child"}, 
        [React.createElement("h1",{}, "H1 tag hai"),
         React.createElement("h2",{},"H2 tag hai yeh")]
        )),

        (React.createElement("div", {id:"child"}, 
            [React.createElement("h1",{}, "H1 tag hai"),
             React.createElement("h2",{},"H2 tag hai yeh")]
            ))
    ]);


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading);  //react object== 

root.render(heading);
