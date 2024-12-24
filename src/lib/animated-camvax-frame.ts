import { Camvax } from "./camvax";

export interface AnimatedCamvaxFrameSettings {
  fps: number;
  pre?: (acf: AnimatedCamvaxFrame) => void;
  post?: (acf: AnimatedCamvaxFrame) => void;
}

export class AnimatedCamvaxFrame {
  private currentFrame = 0;
  constructor(
    private readonly camvax: Camvax,
    private readonly settings: AnimatedCamvaxFrameSettings
  ) {}

  getCurrentFrame() {
    return this.currentFrame;
  }

  getCamvax() {
    return this.camvax;
  }

  getSettings() {
    return this.settings;
  }

  start() {
    const { fps, pre, post } = this.settings;
    pre && pre(this);
    this.camvax.clear();
    this.camvax.draw();
    post && post(this);
    this.currentFrame++;
    if (this.currentFrame >= fps) {
      this.currentFrame = 0;
    }
    setTimeout(() => {
      this.start();
    }, 1000 / fps);
  }
}
