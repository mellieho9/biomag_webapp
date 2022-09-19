module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0601541b060817ad5d102d2d1ba958ad'),
  },
});
