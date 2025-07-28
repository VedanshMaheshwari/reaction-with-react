import { LOGO_URL } from "../utils/constants";  
import {useState , useEffect} from "react";

const Header = () => {

    let btnName = "Login";

    const [btnNameReact,setbtnNameReact] = useState("Login");

    useEffect(
        ()=>{
            
        },
        []);

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                src={LOGO_URL} alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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
