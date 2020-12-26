import React, {useState } from 'react';


const Counter = () => {
    
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

const reset = () => {
    setCount(0);      
}

    return(
        <div className="content">
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={addCount}>+1</button>
            <button className="btn btn-warning" onClick={reduceCount}>-1</button>
            <button className="btn btn-warning" onClick={reset}>0</button>
        </div>
    );
}

export default Counter;