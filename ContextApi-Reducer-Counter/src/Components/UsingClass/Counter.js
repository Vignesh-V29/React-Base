import React, { useContext } from 'react'
import CounterContext from '../../Context/CounterContext';

const HookCounter = ({name}) =>{  

   const counterContext = useContext(CounterContext)

   const {add,reduce,addby5,reduceby5,reset,count} = counterContext;
 
        return (
            <div className="classContent">
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={add}>+1</button>
            <button className="btn btn-warning" onClick={reduce}>-1</button>
            <button className="btn btn-success" onClick={addby5}>+5</button>
            <button className="btn btn-warning" onClick={reduceby5}>-5</button>
            <button className="btn btn-warning" onClick={reset}>0</button>
        </div>
        )
}


export default HookCounter;