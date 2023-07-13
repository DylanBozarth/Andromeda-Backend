export default () => {
  return async (ctx, next) => {
    if (ctx.body && ctx.body.jwt) {
      ctx.cookies.set("jwt", ctx.body.jwt, {
        httpOnly: true,
        secure: true,
      });
    }

    await next();
  };
};
