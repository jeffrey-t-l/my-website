import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <header className="p-4 bg-teal-500 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">Jeff Leibensperger</h1>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          <div><a href="https://github.com/melanienolan/gatsby-starter-tailwind-css">Website Template Credit, Click</a></div>
          <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </div>
    </>
  )
}

export default Layout
