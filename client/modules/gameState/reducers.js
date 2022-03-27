import { combineReducers } from "redux";

import tilesReducer from "tiles/tileSlice";


const rootReducer = combineReducers({
  tiles: tilesReducer,
});


export default rootReducer;
