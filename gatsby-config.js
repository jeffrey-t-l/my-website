const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "jeffl",
    author: "Jeff Leibensperger",
    description: "Hello!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/fish.svg",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
  ],
}
