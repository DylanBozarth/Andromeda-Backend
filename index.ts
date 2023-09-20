import { Elysia } from "elysia";
import { Login } from "./login/login";
import { Sectors } from "./sectors/sectors";

const app = new Elysia().get("/", () => "DA BACKEND")
.get('/sectora', ({query}) => `query:  ${query.q}`)
.get('/login', () => Login)
.listen(2999);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
