import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu.jsx';


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

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
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
                element : <About />
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
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