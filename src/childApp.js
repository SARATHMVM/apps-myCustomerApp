import React from 'react';


class ChildApp extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;
    }
    myClick = () => {
        this.setState({
            name:"sas"
        })
        alert("I got clicked");
    }

    render(){
        
        return(
        <React.Fragment>
            <p>Hello am from your child component  {this.state.name}</p>
            <button onClick = {this.myClick}>Click Me!</button>
        </React.Fragment>
    )
}

}

export default ChildApp;