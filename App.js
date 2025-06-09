import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id: "child1", key: "child1"},[
//         React.createElement("h1", {key: "h1-1"},"H1 Tag this is inside an array"),
//         React.createElement("h2", {key: "h2-1"},"H2 Tag this is inside an array") 
//     ]),
//     React.createElement("div",{id: "child2", key: "child2"},[
//         React.createElement("h1", {key: "h1-2"},"H1 Tag this is inside an array"),
//         React.createElement("h2", {key: "h2-2"},"H2 Tag this is inside an array") 
//     ])
// ]);

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
