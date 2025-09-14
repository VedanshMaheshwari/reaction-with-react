import ItemList from './ItemList.jsx';


const RestaurantCategory = ({ data , showItems, setShowIndex}) =>{
   
   const handleClickShowItems = () => {
      setShowIndex();
   };
   
   return (
      <div className=" w-6/12 mx-auto my-4 p-2 shadow-lg bg-gray-100  rounded-lg cursor-pointer">
         <div 
            className="flex justify-between " 
            onClick={handleClickShowItems} 
         >
            <span className="font-bold text-lg">{data?.title} ({data.itemCards.length}) </span>
            <span>⬇️</span>
         
         </div>

         {showItems && <ItemList items={data?.itemCards}/>}
      </div>
   )
}

export default RestaurantCategory;