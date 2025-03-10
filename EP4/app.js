import React from "react";
import ReactDOM from "react-dom/client"; 
/** 
 * Header
 * -logo
 * -nav-items
 * Body
 * -Search
 * -RestaurantContainer
 * Footer 
 * -Copyrights
 * -rights
 * -address
 * -contact
*/
 

const Header = () => {
    return (
        <div className ="header" >
            <div className ="logo-container">
                <img src = "https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760" className="logo"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};
 
const styleCard = {
    backgroundColor: "#f0f0f0",

};


//Inline CSS - Style takes JAVASCRIPT OBJECT:

const RestaurantCard = () =>{
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0",
        
        }}>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/e0vvulfbahjxjz6k4uwi"> x</img>
            <h3>Meghana Foods</h3>
        </div>
    )
}

const Body = () =>{
    return(
        <div className = "body">
            
            <div className="search">Search</div>

            <div className="res-container">
            <RestaurantCard /> 
            </div>
        </div>
    )    
}

const AppLayout = () => {
    return (
        <div className ="app">

            <Header />
            <Body /> 
        
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
