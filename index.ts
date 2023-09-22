import { Elysia } from "elysia";
import * as mongoose from 'mongoose';
import { Sector } from "./schema/schema";

await mongoose.connect(`${process.env.MONGOURL}`);
const app = new Elysia().get("/", () => "DA BACKEND")

.get('/sectora', () => Sector)
// .get('/login', () => Login)
.listen(`${process.env.PORT}`);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
