import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"


const RestaurantMenu = () => {

    // const [ resInfo ,setResInfo ] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId); 
    console.log(resId);

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
    console.log(itemCards);

    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")}</h2>
            <h2>Menu Items</h2>
            <ul >
                {itemCards.map(item => (
                    <li key={item.card.info.id}>
                        {item.card.info.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default RestaurantMenu;