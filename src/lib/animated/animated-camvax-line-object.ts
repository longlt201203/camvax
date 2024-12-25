import { Coordinate } from "../oxy";
import { CamvaxLineObject } from "../static";
import { AnimatedCamvaxObject } from "./animated-camvax-object";

export class AnimatedCamvaxLineObject extends AnimatedCamvaxObject {
  constructor(
    id: string,
    path: Coordinate[],
    private readonly numberOfFrames: number
  ) {
    const count = Math.ceil(numberOfFrames / path.length);
    const frames = [];
    let startX = path[0].x;
    let startY = path[0].y;
    let currentPath: Coordinate[] = [{ x: startX, y: startY }];
    for (let i = 1; i < path.length; i++) {
      const dx = (path[i].x - startX) / count;
      const dy = (path[i].y - startY) / count;
      for (let j = 1; j <= count; j++) {
        frames.push(
          new CamvaxLineObject(id, [
            ...currentPath,
            { x: startX + dx * j, y: startY + dy * j },
          ])
        );
      }
      currentPath.push(path[i]);
      startX = path[i].x;
      startY = path[i].y;
    }
    super(id, frames);
  }
}
