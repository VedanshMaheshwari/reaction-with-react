import RestaurantCard from "./RestaurantCard.jsx";
import { resList } from "../utils/mockdata";
import Shimmer from "./Shimmer.jsx";
import {useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";


const Body = () =>{
    // State Variable - SUPER POWERFUL VARIABLE
    const [ListofRestaurants, setlistofRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [searchText,setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData =   async () => {
        const data = await fetch ( 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log (json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        //USE OPTIONAL CHAINING ALWAYS
        const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setlistofRestaurants(restaurants);
        setFilteredRestaurants(restaurants);

    }

    // Normal JS Variable
    // let ListofRestaurants = []\nu;f -> value  to be passed;

    // let ListofRestaurants = [    
    //   {
    //     "info": {
    //       "id": "396753",
    //       "name": "Wendy's Burgers",
    //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG",
    //       "costForTwo": "₹200 for two",
    //       "cuisines": [
    //         "Burgers",
    //         "American",
    //         "Fast Food",
    //         "Snacks"
    //       ],
    //       "avgRating": 3.1,
    //       "parentId": "972",
    //       "avgRatingString": "4.3",
    //       "totalRatingsString": "2.8K+",
    //       "deliveryTime": 36,

    //     }
    //   },
    //   {
    //     "info": {
    //       "id": "396754",
    //       "name": "Domino's",
    //       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG",
    //       "costForTwo": "₹200 for two",
    //       "cuisines": [
    //         "Burgers",
    //         "American",
    //         "Fast Food",
    //         "Snacks"
    //       ],
    //       "avgRating": 4.4,
    //       "parentId": "972",
    //       "avgRatingString": "4.3",
    //       "totalRatingsString": "2.8K+",
    //       "deliveryTime": 36,

    //     }
    //   }
    // ]

    // CONDITIONAL RENDERING
    // if(ListofRestaurants.length === 0){
    //     return <Shimmer />;
    // }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>You seem to be offline, using RVU wifi? sad. </h1>
    }


    return ListofRestaurants.length === 0 ? (
     <Shimmer /> 
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value= {searchText} 
                        onChange={(event) => {
                            setSearchText(event.target.value);
                            
                        }                       
                    }
                    />
                    <button onClick={() => {
                        //FILTER THE UI AND SHOW THE CARDS FOR TEXT
                        //Search Text
                        const filteredRestaurants = ListofRestaurants.filter((res)=>{
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                        )
                        setFilteredRestaurants(filteredRestaurants);     
                        console.log(searchText); 
                    }}>Search</button>
                </div>

                <button className="filter-btn"
                onClick  ={() => {
                   //FILTER LOGIC
                   if(isFiltered){
                    setFilteredRestaurants(ListofRestaurants);
                    setIsFiltered(false);
                   }
                   else{
                    const filterList = ListofRestaurants.filter(
                        (res) => res.info.avgRating >= 4.5
                       );
                       setFilteredRestaurants(filterList);   
                       setIsFiltered(true);                 
                   }

                   console.log(ListofRestaurants); 

                }}
                >
                {isFiltered ? "Show All Restaurant" : "Top Rated Restaurant"}
                </button>
            </div>
            <div className='res-container'>
                {/* This is not a good way to do it. What if there were. we need to create a loop.*/}
                {/* We can use map function to create a loop. */}
                {/* <RestaurantCard resData  = {resList[0]} />
                <RestaurantCard resData  = {resList[1]} />
                <RestaurantCard resData  = {resList[2]} />
                <RestaurantCard resData  = {resList[3]} />
                <RestaurantCard resData  = {resList[4]} />
                <RestaurantCard resData  = {resList[5]} />
                <RestaurantCard resData  = {resList[6]} />
                <RestaurantCard resData  = {resList[7]} />
                <RestaurantCard resData  = {resList[8]} />
                <RestaurantCard resData  = {resList[9]} />
                <RestaurantCard resData  = {resList[10]} />
                <RestaurantCard resData  = {resList[11]} />
                <RestaurantCard resData  = {resList[12]} />
                <RestaurantCard resData  = {resList[13]} /> */}
                {
                  filteredRestaurants.map((variable) => (
                  <Link  key={variable.info.id}  to={"/restaurant/"+variable.info.id} ><RestaurantCard resData = {variable}/></Link>
                ))}

                {/* Not using key(not acceptable) <<<< index as key << unique id (BEST PRACTICE) */}
            </div> 
        </div>
    )
}

export default Body;