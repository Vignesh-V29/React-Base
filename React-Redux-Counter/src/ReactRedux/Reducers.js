import {ADD,REDUCE,ADDBY5,REDUCEBY5,RESET} from './Types';


const initialCount = {
    count:0
}

const Reducer = (state=initialCount,action) => {
    switch(action.type){
        case ADD:
            return {
                ...state,
                count: state.count + action.payload
            }
        case REDUCE:
            return {
                ...state,
                count:(state.count > 0) ? state.count - action.payload : state.count
            }
    
        case ADDBY5:
            return {
                ...state,
                count: state.count + action.payload
            }
            
        case REDUCEBY5:
            return {
                ...state,
                count: state.count - action.payload
            }
    
        case RESET:
            return {
                ...state,
                count: action.payload
            }

        default:
            return state
    }
}

export default Reducer;