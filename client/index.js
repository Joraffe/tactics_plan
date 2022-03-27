import * as PIXI from 'pixi.js';

import { testLog } from 'helpers/misc.js';


testLog('webpack JS loaded!');

const app = new PIXI.Application({
  'width': 1920,
  'height': 1080,
   backgroundColor: 0xAAAAAA,
});
document.body.appendChild(app.view);

const sprites = {};
app.loader.add('/static/assets/images/tiles.json').load(doneLoadingSpriteSheet);


export const doneLoadingSpriteSheet = function() {
  const spriteSheet = app.loader.resources['/static/assets/images/tiles.json'].spritesheet;
  console.log(spriteSheet)

  sprites['tiles'] = {};
  sprites['tiles']['simple'] = new PIXI.Sprite(spriteSheet.textures['simple_tile.png']);
  sprites['tiles']['grass'] = new PIXI.Sprite(spriteSheet.textures['grass_tile.png']);
  sprites['tiles']['rock'] = new PIXI.Sprite(spriteSheet.textures['rock_tile.png']);
  sprites['tiles']['sand'] = new PIXI.Sprite(spriteSheet.textures['sand_tile.png']);
  sprites['tiles']['water'] = new PIXI.Sprite(spriteSheet.textures['water_tile.png']);

  for (let sprite in sprites['tiles']) {
    app.stage.addChild(sprites['tiles'][sprite]);
  }
}
