import RestaurantCard from "./RestaurantCard.jsx";
import {resList} from "../utils/mockdata";



const Body = () =>{

    // Normal JS Variable
    let ListofRestaurants = [    
        {
        "info": {
          "id": "396753",
          "name": "Wendy's Burgers",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Snacks"
          ],
          "avgRating": 3.1,
          "parentId": "972",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.8K+",
          "deliveryTime": 36,

        }
      },
      {
        "info": {
          "id": "396754",
          "name": "Domino's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4cf1123e-f4c0-402e-8ed3-c13c5072588b_396753.JPG",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Snacks"
          ],
          "avgRating": 4.4,
          "parentId": "972",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.8K+",
          "deliveryTime": 36,

        }
      }
    ]

    return(
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" 
                onClick  ={() => {
                   //FILTER LOGIC
                    ListofRestaurants = ListofRestaurants.filter(
                    (res) => res.info.avgRating > 4
                   );
                   console.log(ListofRestaurants); 

                }}
                >Top Rated Restaurant</button>
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
                  ListofRestaurants.map((variable) => (
                  <RestaurantCard key = {variable.info.id} resData = {variable}/>
                ))}

                {/* Not using key(not acceptable) <<<< index as key << unique id (BEST PRACTICE) */}
            </div> 
        </div>
    )
}

export default Body;