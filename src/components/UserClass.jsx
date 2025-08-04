import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        }
        console.log(props);
    }

    componentDidMount(){
        // best place to make API Call
    }

    render(){
        const { count} = this.state;
        const { name,location } = this.props;

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Increase Count</button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: @VedanshMaheshwari</h2>
            </div>
        )
    }
}

export default UserClass;