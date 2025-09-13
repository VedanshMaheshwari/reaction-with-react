const RestaurantCategory = ({ data }) =>{
   console.log(data)
   return <div className=" w-6/12 mx-auto my-4 p-2  bg-gray-100 ">
        <span>{data?.title}</span>
        <span>⬇️</span>
   </div> 
}

export default RestaurantCategory;