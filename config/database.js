module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: "${process.env.ATLAS_URI || ''}"
      },
      options: {
        "ssl": false
      },
    },
  },
});