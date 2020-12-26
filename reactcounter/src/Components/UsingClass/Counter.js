import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    addCount=()=>{
        this.setState((prevCount)=>({
            count: prevCount.count + 1
        }),()=>{
            console.log('count',this.state.count)
        })
    }

    reduceCount = () => {
        if(this.state.count > 0){
            this.setState((prevCount)=>({
                count: prevCount.count - 1
            }))       
         }   
    }

    addCountBy5 = () =>{
        this.setState((prevCount)=>({
            count: prevCount.count + 5
        }),()=>{
            console.log('count',this.state.count)
        })    }
    
    reduceCountBy5 = () => {
        if(this.state.count > 0){
            this.setState((prevCount)=>({
                count: prevCount.count - 5
            }))       
         }   
    }
    
    reset = () => {
        this.setState({count:0}) 
    }

    render() {
        return (
            <div className="classContent">
            <h1>{this.props.name}</h1>
            <h1>{this.state.count}</h1>
            <button className="btn btn-success" onClick={this.addCount}>+1</button>
            <button className="btn btn-warning" onClick={this.reduceCount}>-1</button>
            <button className="btn btn-success" onClick={this.addCountBy5}>+5</button>
            <button className="btn btn-warning" onClick={this.reduceCountBy5}>-5</button>
            <button className="btn btn-warning" onClick={this.reset}>0</button>
        </div>
        )
    }
}


export default ClassCounter;