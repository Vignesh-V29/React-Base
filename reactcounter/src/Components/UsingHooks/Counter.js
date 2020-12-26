import React, {useState } from 'react';


const Counter = ({name}) => {
    
//using Hooks

const [count,setCount] = useState(0);

const addCount = () =>{
    setCount(prevCount => prevCount + 1);
}

const reduceCount = () => {
    if(count > 0){
    setCount(prevCount => prevCount - 1);
    }   
}

const addCountBy5 = () =>{
    setCount(prevCount => prevCount + 5);
}

const reduceCountBy5 = () => {
    if(count > 0){
    setCount(prevCount => prevCount - 5);
    }   
}

const reset = () => {
    setCount(0);      
}

    return(
        <div className="hooksContent">
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={addCount}>+1</button>
            <button className="btn btn-warning" onClick={reduceCount}>-1</button>
            <button className="btn btn-success" onClick={addCountBy5}>+5</button>
            <button className="btn btn-warning" onClick={reduceCountBy5}>-5</button>
            <button className="btn btn-warning" onClick={reset}>0</button>
        </div>
    );
}

export default Counter;