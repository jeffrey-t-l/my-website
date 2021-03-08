import React from "react"
import SEO from "./SEO"
import { Link } from "gatsby"
import DarkskyQuery from "../components/DarkskyQuery"

const DarkskyWeatherQuery = DarkskyQuery()

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        <nav className="flex items-center justify-between flex-wrap p-6 bg-black text-white font-semibold">
          <div className="flex items-left flex-no-shrink text-white mr-6">
            {/*<svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>*/}
            <Link to="/"><span className="font-semibold text-xl tracking-tight">Jeff Leibensperger</span></Link>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="/books">
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Good Reads
                </span>
              </Link>
              <Link to="/resume">
                <span className="p-4 bg-black text-white text-s rounded shadow hover:bg-gray-700">
                  Work Experience
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
            <div  className="text-sm">
              <a href="https://github.com/jeffrey-t-l/" target="_blank" rel="noreferrer"
                    className="p-4 bg-black text-white text-xs rounded shadow hover:bg-gray-700">
                    GitHub
              </a>
            </div>
            <div  className="text-sm">
              <a href="https://www.linkedin.com/in/jeffleibensperger/" target="_blank" rel="noreferrer"
                    className="p-4 bg-black text-white text-xs rounded shadow hover:bg-gray-700">
                    LinkedIn
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="p-16 bg-black text-gray-600 text-xs text-right align-bottom">
          <div><a href="https://github.com/melanienolan/gatsby-starter-tailwind-css" target="_blank" rel="noreferrer">Website Template</a> | Icons by <a href="https://www.freepik.com"  target="_blank" rel="noreferrer" title="Freepik">Freepik</a> | Weather from <a href="https://darksky.net"  target="_blank" rel="noreferrer" title="Darsky">Darksky</a></div>
        </footer>
        {/*<footer className="w-full border-t border-black p-8 pin-b bg-black text-gray-600">
          <div className="h-48 flex flex-wrap content-center">
            <div>1</div>
            <div className="text-xs text-right text-bottom">Template by <a href="https://github.com/melanienolan/gatsby-starter-tailwind-css" target="_blank" rel="noreferrer">Melanie Nolan</a> | Icons by <a href="https://www.freepik.com"  target="_blank" rel="noreferrer" title="Freepik">Freepik</a> | Weather from <a href="https://darksky.net"  target="_blank" rel="noreferrer" title="Darsky">Darksky</a></div>
          </div>
        </footer>*/}
      </div>
    </>
  )
}

export default Layout
