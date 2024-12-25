import { AnimatedCamvaxLineObject, AnimatedCamvaxObject } from "./lib/animated";
import { CamvaxLineObject } from "./lib/static";

export const animatedLine = new AnimatedCamvaxLineObject(
  "line",
  [
    { x: 10, y: 10 },
    { x: 10, y: 50 },
    { x: 50, y: 50 },
    { x: 100, y: 50 },
    { x: 100, y: 100 },
  ],
  240
);

export const animatedLine2 = new AnimatedCamvaxLineObject(
  "line2",
  [
    { x: 10, y: 10 },
    { x: 50, y: 10 },
    { x: 50, y: 50 },
    { x: 50, y: 100 },
    { x: 100, y: 100 },
  ],
  240
);
