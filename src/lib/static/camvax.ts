import { CamvaxObject } from "./camvax-object";

export class Camvax {
  private readonly objectMap = new Map<string, CamvaxObject>();
  constructor(private readonly ctx: CanvasRenderingContext2D) {}

  getContext() {
    return this.ctx;
  }

  putObject(object: CamvaxObject) {
    this.objectMap.set(object.getId(), object);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    for (const object of this.objectMap.values()) {
      object.drawTo(this);
    }
  }
}
