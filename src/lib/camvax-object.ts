import { Camvax } from "./camvax";

export abstract class CamvaxObject {
  constructor(private readonly id: string) {}

  getId() {
    return this.id;
  }

  abstract drawTo(camvax: Camvax): void;
}
