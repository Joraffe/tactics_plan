import * as PIXI from 'pixi.js';

import { loadAssets } from 'game/bootstrap';


const app = new PIXI.Application({
  'width': 1920,
  'height': 1080,
   backgroundColor: 0xAAAAAA,
});
document.body.appendChild(app.view);

loadAssets();
