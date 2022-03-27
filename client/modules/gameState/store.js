import { createStore } from 'redux';
import rootReducer from 'gameState/reducers';


const store = createStore(rootReducer);


export default store;
