import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <header className="p-4 bg-teal-500 text-white font-semibold">
          {/*<h1 className="max-w-4xl mx-auto">Jeff Leibensperger</h1>*/}
          <h2><Link to="/">Go Home</Link><span> | </span><Link to="/aboutme">About Me</Link></h2>
        </header>
        {children}
        <footer className="p-1 bg-teal-500 text-white">
          <div>Template by <a href="https://github.com/melanienolan/gatsby-starter-tailwind-css">Melanie Nolan</a> | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> | Weather data from <a href="https://darksky.net" title="Darsky">Darksky</a></div>
        </footer>
        {/*}
        <footer className="py-2 text-center text-gray-600 text-xs">
          <div>Template by <a href="https://github.com/melanienolan/gatsby-starter-tailwind-css">Melanie Nolan</a> | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a></div>
        </footer>
        */}
      </div>
    </>
  )
}

export default Layout
