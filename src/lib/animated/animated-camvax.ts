import { Camvax } from "../static";

export interface AnimatedCamvaxSettings {
  fps: number;
  pre?: (acf: AnimatedCamvax) => void;
  post?: (acf: AnimatedCamvax) => void;
}

export class AnimatedCamvax extends Camvax {
  private currentFrame = 0;
  constructor(
    ctx: CanvasRenderingContext2D,
    private readonly settings: AnimatedCamvaxSettings
  ) {
    super(ctx);
  }

  draw() {
    const { fps, post, pre } = this.settings;
    pre && pre(this);
    this.clear();
    super.draw();
    post && post(this);
    this.currentFrame++;
    if (this.currentFrame >= fps) {
      this.currentFrame = 0;
    }
    setTimeout(() => {
      this.draw();
    }, 1000 / fps);
  }
}
