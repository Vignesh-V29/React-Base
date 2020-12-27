import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './ReactRedux/Reducers';

//Thunk middleware is to define async action creators.
const middleware = [thunk];

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;