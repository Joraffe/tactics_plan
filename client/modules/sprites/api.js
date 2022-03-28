import * as PIXI from 'pixi.js';


const TILE_SPRITESHEET_JSON_PATH = '/static/images/tiles.json';


export const loadSpriteSheets = async () => {
  return new Promise((resolve, reject) => {
    const loader = PIXI.Loader.shared;

    loader.add(TILE_SPRITESHEET_JSON_PATH)
          .load();

    loader.onComplete.add(() => {
      resolve({
        sprites: {
          tiles: {
            jsonPath: '/images/tiles.json',
            imgPath: '/images/tiles.png',
            loaded: true,
          }
        },
      });
    });
    loader.onError.add(() => { reject(); });
  });
};
