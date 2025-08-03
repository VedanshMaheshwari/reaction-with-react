import { useState } from "react"; 

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(0);

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