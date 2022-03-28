import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'game/reducers';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleWare));
const store = createStore(rootReducer, composedEnhancer);


export default store;
