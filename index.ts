const server = Bun.serve({
  port: 2999,
  development: true,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(`Home page!`);
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response(`404!`);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
