export default ({ env }) => ({
  host: env('HOST', 'andromeda-backend-production.up.railway.app'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", [`${process.env.API_KEY1}`, `${process.env.API_KEY2}`]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
