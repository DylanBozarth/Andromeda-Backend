import { Elysia } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { jwt } from "@elysiajs/jwt";
/*
export const Login = new Elysia()
    .group("/login", (app) =>
        app
            .use(
                jwt({
                    name: "jwt",
                    secret: Bun.env.JWTSECRET!,
                })
            )
            .use(cookie())
    )
*/