const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

//add this to gitignore

module.exports = {
  siteMetadata: {
    title: "@jeffl",
    author: "Jeff Leibensperger",
    description: "Hello!",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Tailwind CSS",
        short_name: "Gatsby Starter Tailwind CSS",
        start_url: "/",
        background_color: theme.colors.white,
        theme_color: theme.colors.teal[500],
        icon: "static/fish.svg",
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '5af608f4cfa63a9469c42f08c22efed7',
        latitude: '37.8267',
        longitude: '122.4233',
        exclude: [`minutely`, `hourly`, `flags`]
      },
    },
  ],
}
