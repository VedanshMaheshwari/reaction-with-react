import { LOGO_URL } from "../utils/constants";  
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"


const Header = () => {

    let btnName = "Login";
    const [btnNameReact,setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    useEffect(
        ()=>{
            
        },
        []);

    return (
        <div className='flex justify-between bg-gray-100 items-center'>
            <div className='logo-container'>
                <img className='w-56' 
                src={LOGO_URL} alt='logo' />
            </div>
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className="p-4"> Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About</Link></li>
                    <li className="p-4"><Link to="/contact">Contact</Link></li>
                    <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-4">Cart</li>
                    <button className="login"
                    onClick={()=>{ 
                        btnNameReact === "Login" 
                        ? setbtnNameReact("Logout")
                        : setbtnNameReact("Login"); 
                            }
                        }>
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
