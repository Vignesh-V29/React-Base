import {ADD,REDUCE,ADDBY5,REDUCEBY5,RESET} from './Types';


const CounterReducer = (state,action)=>{
    switch(action.type){
        case ADD:
          return state + action.payload;
                  
        case REDUCE:
          return (state > 0) ? state - action.payload : state;
  
        case ADDBY5:
          return state + action.payload;
          
        case REDUCEBY5:
          return state - action.payload;
  
        case RESET:
          return action.payload;
          
        default:
          return state;
      }
}

export default CounterReducer;
