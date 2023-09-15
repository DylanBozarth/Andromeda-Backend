import { Elysia } from "elysia";
import { Login } from "./login/login";
import { Sectors } from "./sectors/sectors";

const app = new Elysia().get("/", () => "Hello Elysia")
.get('/sectors', () => Sectors)
.get('/login', () => Login)
.listen(2999);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
