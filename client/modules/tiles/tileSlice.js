import * as actions from 'tiles/actions';
import * as models from 'tiles/models';


export const initTileState = function() {
  return {
    'tiles': [],
  };
}


export default function tilesReducer(state = initTileState(), action) {
  switch (action.type) {
    case actions.CREATE_TILE: {
      return {
        ...state,
        tiles: [...state.tiles, models.createTile(action.payload)],
      };
    }
    default:
      return state;
  }
}