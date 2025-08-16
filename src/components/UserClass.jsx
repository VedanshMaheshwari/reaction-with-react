import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 0,
            userInfo:{ 
                name: "dummy",
                location: "somewhere in India",
                // avatar_url: "",
            },
        }
        console.log(props);
    }

    async componentDidMount(){    
        // best place to make API Call
        const data = await fetch("https://api.github.com/users/VedanshMaheshwari");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    render(){
        const { count} = this.state;
        // const { name,location } = this.props;
        const { name,location,bio,avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Increase Count</button> */}
                <img src= {avatar_url} alt="" />
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Bio: {bio}</h2>
            </div>
        )
    }
}

export default UserClass;