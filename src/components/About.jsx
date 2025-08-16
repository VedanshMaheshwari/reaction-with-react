import User from "../components/User"
import UserClass from "./UserClass"
import { Component } from "react";

class About extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

    }

    render(){
    return(
        <div>
            <h1>About</h1>
            <h2>I am learning router</h2>
            <User name={"Vedansh Maheshwari (Functional)"}/>
            <UserClass name={"Vedansh Maheshwari (Class)"} location ={"Bengaluru"}/>
            <UserClass name={"Vedansh Maheshwari (Class)"} location ={"Bengaluru"}/>
        </div>
    );
    }
}


// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>I am learning router</h2>
//             {/* <User name={"Vedansh Maheshwari (Functional)"}/> */}
//             <UserClass name={"Vedansh Maheshwari (Class)"} location ={"Bengaluru"}/>
//         </div>
//     );
// };

export default About;