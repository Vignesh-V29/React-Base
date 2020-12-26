import React, { useReducer } from 'react';
import CounterContext from './CounterContext';
import counterReducer from './CounterReducer';
import {ADD,REDUCE,ADDBY5,REDUCEBY5,RESET} from './Types';

const CounterState = props => {
    
    const initCount = 0;

    const [count,dispatch] = useReducer(counterReducer , initCount)

    const add = () => {

        dispatch({
            type:ADD,
            payload: 1
        })
    }

    const reduce = () => {
         dispatch({
            type:REDUCE,
            payload: 1
        })
    }

    const addby5 = () => {
        dispatch({
            type:ADDBY5,
            payload: 5
        })
    }

    const reduceby5 = () => {
        dispatch({
            type:REDUCEBY5,
            payload: 5
        })
    }

    const reset = () => {
        dispatch({
            type:RESET,
            payload: initCount
        })
    }

    return (
        <CounterContext.Provider
        value={{
            count:count,
            add,
            reduce,
            addby5,
            reduceby5,
            reset
        }}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterState;