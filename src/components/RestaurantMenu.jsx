import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    // const [ resInfo ,setResInfo ] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 
    //console.log(resId);
    
    // useEffect(()=>{
    //      fetchMenu();
    // },[]);
    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API+resId);         
    //     const json = await data.json();
    //     setResInfo(json);
    // }

    if (resInfo === null) return <Shimmer /> 

    // Add defensive checks for the API response structure
    if (!resInfo?.data?.cards || resInfo.data.cards.length < 3) {
        console.error("Unexpected API response structure:", resInfo);
        return <div>Error: Unable to load restaurant data</div>;
    }

    const { name, cuisines } = resInfo.data.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    //console.log(resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( 
        (c) => c.card.card['@type'] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
     
     console.log(categories)
    return  (
        <div className="text-center">
            <h1 className="font-bold m-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")}
            </p>
            {/* Category accordions */}
            {categories.map(()=>
                {<RestaurantCategory/>}
                )
            }
        </div>
    )
}

export default RestaurantMenu;