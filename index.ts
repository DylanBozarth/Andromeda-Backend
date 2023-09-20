import { Elysia } from "elysia";
import { Sectors } from "./sectors/sectors";

const app = new Elysia().get("/", () => "DA BACKEND")
.get('/sectora', ({query}) => `query:  ${query.q}`)
// .get('/login', () => Login)
.listen(`${process.env.PORT}`);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
