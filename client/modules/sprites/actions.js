export const TILE_SPRITE_LOADED = 'sprites/tiles/loaded';


export const tilesSpriteLoaded = sprites => {
  return {
    type: TILE_SPRITE_LOADED,
    payload: sprites,
  };
};
