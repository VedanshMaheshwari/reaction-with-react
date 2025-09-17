import {CDN_URL} from '../utils/constants.js';
import {useDispatch} from "react-redux";
import { addItems } from '../utils/cartSlice.js';

const ItemList = ({ items }) => {
    
    const dispatch = useDispatch(); // dispatch is a function now.


    const handleItems = (item) => {
        dispatch(addItems(item));
    };
    

    return (
        <section>
            {items.map(item => (
                <div key={item.card.info.id} className="m-2 p-2 flex justify-between mb-4 border-b border-gray-300">

                    <div className="w-9/12">
                        <div className='flex '>
                            <span className="m-0 text-base font-semibold">{item.card.info.name}{" -"}</span>
                            <span>{" "}₹{(item.card.info.defaultPrice/100) ? (item.card.info.defaultPrice/100) : (item.card.info.price/100) } </span>
                        </div>
                         
                        <p className="flex mt-2 text-xs text-gray-400">{item.card.info.description}</p>
                    </div>

                    <div className='w-3/12  p-1 '>
        
                        <div className='absolute'>
                            <button 
                            className='bg-black text-white mx-16 p-1 rounded-lg'
                            onClick={() => handleItems(item)}
                            > 
                                Add +
                            </button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="object-cover mr-4 rounded" />
                    </div>
                    
                </div>
            ))}
        </section>
    );
};

export default ItemList;
