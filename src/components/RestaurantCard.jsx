import { CDN_URL } from "../utils/constants";


const styleCard = { 
    backgroundColor : "#F0F0F0"
}


const RestaurantCard = (props) => {
    const {resData} = props;
    
    //Destructuring the props
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    return (
        <div className='res-cards' style={styleCard}>
            <img className='res-logo' src= {CDN_URL  + resData.info.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",    ")}</h4>
            <h4>{avgRating }</h4>
        </div>
    )
} 

export default RestaurantCard;