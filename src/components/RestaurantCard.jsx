import { CDN_URL } from "../utils/constants";


const styleCard = { 
    backgroundColor : "#F0F0F0"
}


const RestaurantCard = (props) => {
    const {resData} = props;
    
    //Destructuring the props
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300' >
            <img className='res-logo' src= {CDN_URL  + resData.info.cloudinaryImageId} />
            <h3 className="font-bold py-1 text-l">{name}</h3>
            <h4>{cuisines.join(",    ")}</h4>
            <h4>{avgRating }</h4>
        </div>
    )
} 


// Higher Order Component
// Input - RestaurantCard ==> RestaurantCardPromoted

export const withLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-1 px-1 rounded-lg">OPEN</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
}

export default RestaurantCard;