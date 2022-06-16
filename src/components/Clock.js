import React from "react";
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    //Life Cycle Method
    //Method rns after the component output has been rendered to the DOM
    componentDidMount(){
        console.log('componentDidMount');
        this.timerID= setInterval(
            ()=>this.tick(),
            1000
        );
    }
    //Life Cycle Method
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
export default Clock;