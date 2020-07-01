module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "mongodb+srv://bsc_strapi_admin:rK5gvSNR3BECGn8r@cluster0-anijk.mongodb.net/brunosala_com-strapi?retryWrites=true&w=majority"
      },
      options: {
        "ssl": true
      },
    },
  },
});