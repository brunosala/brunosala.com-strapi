module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
<<<<<<< HEAD
        uri: "mongodb+srv://bsc_strapi_admin:rK5gvSNR3BECGn8r@cluster0-anijk.mongodb.net/brunosala_com-strapi?retryWrites=true&w=majority"
=======
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'brunosala_com-strapi'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
>>>>>>> parent of 5a9d043... config
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
