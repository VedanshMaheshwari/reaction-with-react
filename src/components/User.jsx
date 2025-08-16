import { useState } from "react"; 
import { useEffect } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(0);

    // useEffect(() => {
    //     getUserInf();
    // },[])

    // async function getUserInf() {
    //     const data = await fetch("https://api.github.com/users/VedanshMaheshwari");
    //     const json = await data.json();
    //     console.log(json);
    // }

    return (
        <div className="user-card">
            <h1>Count: {count + " " + count2}</h1>
            <h1>Name: {props.name}</h1>
            <h2>Location: Dehradun</h2>
            <h2>Contact: @VedanshMaheshwari</h2>
        </div>
    )
}

export default User;