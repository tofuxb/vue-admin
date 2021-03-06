const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js') || []

const actions = keys.reduce((memo, key) => {
  return Object.assign({}, memo, context(key))
}, {})

export default actions
