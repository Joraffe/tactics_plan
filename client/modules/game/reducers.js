import { combineReducers } from "redux";

import spritesReducer from "sprites/spritesSlice";
import tilesReducer from "tiles/tilesSlice";


const rootReducer = combineReducers({
  tiles: tilesReducer,
  sprites: spritesReducer,
});


export default rootReducer;
