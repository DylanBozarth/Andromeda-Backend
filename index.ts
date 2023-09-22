import { Elysia } from "elysia";
import * as mongoose from 'mongoose';
import { SectorModel } from "./schema/schema";

await mongoose.connect(`${process.env.MONGOURL}`);

const returnSector = await SectorModel;
const app = new Elysia().get("/", () => "DA BACKEND")
  .get('/sectora', () => { return returnSector.find({}) })
  .get('/test', () => { return 'hello' })
  .listen(`${process.env.PORT}`);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
//db.sectora.find()