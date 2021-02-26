import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        {/*
        <header className="p-4 bg-black text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">Jeff Leibensperger</h1>
          <h2 className="max-w-4xl mx-auto"><Link to="/">Go Home</Link><span> | </span><Link to="/aboutme">About Me</Link></h2>
        </header>
        */}
        <nav class="flex items-center justify-between flex-wrap p-6 bg-black text-white font-semibold">
          <div class="flex items-center flex-no-shrink text-white mr-6">
            <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">Jeff Leibensperger</span>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              <Link to="/">Home</Link>
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
              <Link to="/aboutme">About Me</Link>
              </a>
              <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
              <Link to="/blog">Blog</Link>
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="p-2 bg-black text-gray-600 text-xs text-right">
          <div>Template by <a href="https://github.com/melanienolan/gatsby-starter-tailwind-css">Melanie Nolan</a> | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> | Weather data from <a href="https://darksky.net" title="Darsky">Darksky</a></div>
        </footer>
      </div>
    </>
  )
}

export default Layout
