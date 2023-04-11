
/* eslint-disable fp/no-mutation */
module.exports = {
  init: (_providerOptions, _settings) => {
    return {
      send: async (options) => {
        console.log('sending from cio mock provider')
      }
    }
  },
}
