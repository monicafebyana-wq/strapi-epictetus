module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("HEROKU_URL"),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '1a7bd56caf06c533c31cf079ae3b0f33'),
    },
  },
});
