import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 
    const [showIndex, setShowIndex] = useState(null); 
   

    if (resInfo === null) return <Shimmer /> 

    // Add defensive checks for the API response structure
    if (!resInfo?.data?.cards || resInfo.data.cards.length < 3) {
        console.error("Unexpected API response structure:", resInfo);
        return <div>Error: Unable to load restaurant data</div>;
    }

    const { name, cuisines } = resInfo.data.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

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
            {categories.map((category , index)=> (

                //CONTROLLED COMPONENT
                // For first category, show items by default
                // For other categories, items are hidden by default
                // Clicking on category title toggles the visibility of items
                <RestaurantCategory 
                    key={category?.card?.card?.categoryId ?? category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex && true}
                    setShowIndex = {()=> setShowIndex(index)}
                    
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;