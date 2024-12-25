import { Camvax } from "./camvax";
import { CamvaxObject } from "./camvax-object";
import { Coordinate } from "../oxy";

export class CamvaxLineObject extends CamvaxObject {
  constructor(id: string, private readonly path: Coordinate[]) {
    super(id);
  }

  drawTo(camvax: Camvax) {
    const ctx = camvax.getContext();
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for (let i = 1; i < this.path.length; i++) {
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
  }
}
