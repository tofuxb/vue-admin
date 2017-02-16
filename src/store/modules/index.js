const context = require.context('./', false, /\.js$/)
const keys = context.keys().filter(item => item !== './index.js') || []

const modules = keys.reduce((memo, key) => {
  memo[key.match(/([^/]+)\.js$/)[1]] = context(key).default
  return memo
}, {})

export default modules
