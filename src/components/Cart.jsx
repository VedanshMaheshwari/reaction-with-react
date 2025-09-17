import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
    
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItems());
    };

    const cardItems = useSelector((store)=> {return store.cart.items});
    
    return(
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold m-2 p-1" >Cart Items</h1>
            <button 
                className="bg-gray-200 my-5 p-2 rounded-2xl"
                onClick = { () => handleClearCart()}
            >Clear Cart</button>
            <div className="w-6/12 m-auto border border-gray-300 shadow-lg rounded-3xl">
                <ItemList items={cardItems} />
            </div>
        </div>
    )
}

export default Cart;