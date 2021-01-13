const URL = process.env.SB_URL

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config) => {
    if (URL) {
      config.output.publicPath = URL
    }
    return config
  },
  managerWebpack: async (config) => {
    if (URL) {
      config.output.publicPath = URL
    }
    return config
  },
}
