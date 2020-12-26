import React, {useReducer } from 'react';


const Counter = ({name,value}) => {
    
//using Hooks


const init=0;

  const reducer = (state=init,action) => {
    switch(action.type){
      case 'Add':
        return state + action.payload;

      case 'Reduce':
        return (state > 0) ? state - action.payload : state;

      case 'AddBy5':
        return state + action.payload;
        
      case 'ReduceBy5':
        return state - action.payload;

      case 'Reset':
        return init;
        
      default:
        return state;
    }
  }

const [count, dispatch] = useReducer(reducer, init)

    return(
        <div className="hooksContent">
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={()=>{dispatch({type:'Add',payload:1})}}>+1</button>
            <button className="btn btn-warning" onClick={()=>{dispatch({type:'Reduce',payload:1})}}>-1</button>
            <button className="btn btn-success" onClick={()=>{dispatch({type:'AddBy5',payload:parseInt(value)})}}>+5</button>
            <button className="btn btn-warning" onClick={()=>{dispatch({type:'ReduceBy5',payload:parseInt(value)})}}>-5</button>
            <button className="btn btn-warning" onClick={()=>{dispatch({type:'Reset'})}}>0</button>
        </div>
    );
}

export default Counter;