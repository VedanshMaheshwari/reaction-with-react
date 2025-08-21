const RestaurantCategory = ({ data }) =>{
   console.log(data)
   return <div className="grey">
        <span>{data?.title}</span>
        <span>⬇️</span>
   </div> 
}

export default RestaurantCategory;