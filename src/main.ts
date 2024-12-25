import "./style.css";
import { post, pre } from "./app";
import { AnimatedCamvax } from "./lib/animated";
import { Camvax } from "./lib/static";
import { animatedLine, animatedLine2 } from "./objects";

async function initCamvax(camvax: Camvax) {
  camvax.putObject(animatedLine);
  camvax.putObject(animatedLine2);
}

async function main() {
  const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const animatedCamvax = new AnimatedCamvax(ctx, {
    fps: 240,
    pre: pre,
    post: post,
  });
  await initCamvax(animatedCamvax);
  animatedCamvax.draw();
}

main();
