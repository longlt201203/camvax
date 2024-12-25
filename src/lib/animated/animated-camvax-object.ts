import { Camvax, CamvaxObject } from "../static";

export class AnimatedCamvaxObject extends CamvaxObject {
  private currentFrame = 0;
  constructor(id: string, private readonly frames: CamvaxObject[]) {
    super(id);
  }

  nextFrame() {
    if (this.currentFrame == this.frames.length - 1) {
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
    }
  }

  prevFrame() {
    if (this.currentFrame == 0) {
      this.currentFrame = this.frames.length - 1;
    } else {
      this.currentFrame--;
    }
  }

  setCurrentFrame(index: number) {
    this.currentFrame = index;
  }

  getCurrentFrame(): number {
    return this.currentFrame;
  }

  getCurrentFrameObject(): CamvaxObject {
    return this.frames[this.currentFrame];
  }

  getFrameObject(index: number): CamvaxObject {
    return this.frames[index];
  }

  drawTo(camvax: Camvax) {
    this.frames[this.currentFrame].drawTo(camvax);
  }
}
