import store from 'game/store';
import { loadSprites } from 'sprites/spritesSlice';


export const loadAssets = async () => {
  store.dispatch(loadSprites);
};
