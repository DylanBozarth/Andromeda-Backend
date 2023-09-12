import { db } from './database/dbConnection';

const server = Bun.serve({
    port: process.env.PORT,
    development: true,
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return new Response(`Home page!`);
      if (url.pathname === "/db") return new Response("database");
      return new Response(`404!`);
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);