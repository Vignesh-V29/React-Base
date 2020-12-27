import {ADD,REDUCE,ADDBY5,REDUCEBY5,RESET} from './Types';

export const add = () => async dispatch => {
    dispatch({
        type:ADD,
        payload:1
    })
}
export const reduce = () => async dispatch => {
    dispatch({
        type:REDUCE,
        payload:1
    })
}
export const addBy5 = () => async dispatch => {
    dispatch({
        type:ADDBY5,
        payload:5
    })
}
export const reduceBy5 = () => async dispatch => {
    dispatch({
        type:REDUCEBY5,
        payload:5
    })
}
export const reset = () => async dispatch => {
    dispatch({
        type:RESET,
        payload:0
    })
}