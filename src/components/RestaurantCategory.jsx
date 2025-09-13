import ItemList from './ItemList.jsx';

const RestaurantCategory = ({ data }) =>{
   // console.log(data)
   return (
   
      <div className=" w-6/12 mx-auto my-4 p-2 shadow-lg bg-gray-100  rounded-lg cursor-pointer">
         <div className="flex justify-between ">
            <span className="font-bold text-lg">{data?.title} ({data.itemCards.length}) </span>
            <span>⬇️</span>
         </div>
         {/* <div className="m-2">
            Category Items
         </div> */}
         <ItemList items={data?.itemCards} />
      </div>
   )
}

export default RestaurantCategory;