import _ from 'lodash';

import * as actions from 'sprites/actions';
import * as api from 'sprites/api';


export const initialSpriteState = {
  sprites: {
    tiles: { loaded: false },
  }
};



export async function loadSprites(dispatch, getState) {
  const response = await api.loadSpriteSheets();
  console.log('State before dispatch', JSON.stringify(getState()));
  dispatch(actions.tilesSpriteLoaded(response));
  console.log('State after dispatch', JSON.stringify(getState()));
}


export default function spritesReducer(state = initialSpriteState, action) {
  switch (action.type) {
    case actions.TILE_SPRITE_LOADED: {
      return _.merge(state, action.payload)
    }
    default:
      return state;
  }
}