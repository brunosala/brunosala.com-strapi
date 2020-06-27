module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "${process.env.ATLAS_URI || ''}",
        database: "${process.env.DATABASE_NAME}"
      },
      options: {
        "ssl": false
      },
    },
  },
});