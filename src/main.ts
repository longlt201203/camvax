import "./style.css";
import { Camvax, AnimatedCamvaxFrame } from "./lib";
import { post, pre } from "./app";
import camvaxObjects from "./objects";

async function initCamvax(camvax: Camvax) {
  for (const obj of camvaxObjects) {
    await camvax.putObject(obj);
  }
}

async function main() {
  const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;
  const camvax = new Camvax(ctx);
  await initCamvax(camvax);
  const acf = new AnimatedCamvaxFrame(camvax, {
    fps: 4,
    pre: pre,
    post: post,
  });
  acf.start();
}

main();
