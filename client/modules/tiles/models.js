export const createTile = function(tileType) {
  return {
    tileType: tileType,
    imageName: `${tileType}_tile.png`,
  };
}
