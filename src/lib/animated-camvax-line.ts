import { CamvaxLineObject } from "./camvax-line-object";

export class AnimatedCamvaxLine {
  constructor(private readonly frames: CamvaxLineObject[]) {}

  getFrames() {
    return this.frames;
  }
}
