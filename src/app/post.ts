import { AnimatedCamvax } from "../lib/animated";
import { animatedLine, animatedLine2 } from "../objects";

export function post(camvax: AnimatedCamvax) {
  animatedLine.nextFrame();
  animatedLine2.nextFrame();
}
