import React, {lazy, Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.jsx';
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from './components/Cart.jsx';
// import Grocery from './components/Grocery.jsx';

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

const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
    
    const [userName, setUserName] = useState();
    
    //auth data
    useEffect(()=>{
        const data = {
            name: "VM",
        }

        setUserName(data.name);
    },[]);
    
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app'>
    
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <Suspense fallback = {<h1>Loading...</h1>}><About /></Suspense>
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path : "/grocery",
                element : <Suspense fallback = {<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ],
        errorElement : <Error/>,
    },

    //WE DONT DO THIS
    // {
    //     path : "/Error",
    //     element : <Error/>
    // }
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router = {appRouter} />);