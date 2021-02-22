import React from "react"
import Layout from "../components/Layout"
import Emoji from "../components/Emoji"
import heroImage from "../images/ws-me-point-reyes-2017.jpg"
import { StaticQuery, graphql } from "gatsby"
import Darksky from "../components/Darksky"
import DarkskyQuery from "../components/DarkskyQuery"

const DarkskyWeather = Darksky()

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-around">
        <div className="sm:flex sm:flex-row-reverse sm:items-center">
          <div className="sm:px-2">
            <div>
              <h1 className="px-4 pt-5 text-2xl text-left text-black-500 font-bold sm:text-3xl">
                Hi There! <Emoji symbol="👋" label="wave"/>
              </h1>
              <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
                Some placeholder text here. Yada yada. Will update later.
              </p>
              <span>
              <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">
                The current temperature in <strong><a href="https://goo.gl/maps/eVYSz1HcDd2iFE2E7" target="_blank" rel="noreferrer">Astoria, NY</a></strong> is currently {<StaticQuery
    query={graphql`
      {
        weatherData {
          id
          latitude
          longitude
          currently {
            temperature
            summary
          }
        }
      }
    `}render={data => <pre>{JSON.stringify(data.weatherData.currently.temperature, null, 4)}</pre>}
  ></StaticQuery>}&deg; F.</p></span>
              <br />
                <p className="px-4 mt-8 text-lg text-gray-700 sm:mt-8">Data:{}</p>
              <br /><br />
              <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
                <code className="text-gray-600 text-xs leading-xl">Raw Data:
                  <pre>{DarkskyWeather}</pre>
                </code>
              </div>
              <br /><br />
              <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
                <code className="text-gray-600 text-xs leading-xl">Testing Raw Data:
                  <pre>{DarkskyQuery}</pre>
                </code>
              </div>
              <br /><br />
              <div className="mx-auto">
                <span className="sm:px-4">
                  <a href="https://github.com/jeffrey-t-l" target="_blank" rel="noreferrer"
                    className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400">
                    <strong>Check Out My GitHub</strong>
                    </a>
                </span>
                <span className="sm:px-6">
                  <a href="https://www.linkedin.com/in/jeffleibensperger/" target="_blank" rel="noreferrer"
                    className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400">
                    <strong>Stalk Me on LinkedIn</strong>
                  </a>
                </span>
                <br /><br /><br /><br />
                <span className="sm:px-4">
                  <a href="mailto:jeffrey.leibensperger@gmail.com" target="_blank" rel="noreferrer"
                    className="p-4 bg-teal-500 text-white text-xs rounded shadow hover:bg-teal-400">
                    <strong>Send Me an Email!</strong>
                  </a>
                </span>
                <br /><br />
              </div>
            </div>
          </div>
          <img
            className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
            src={heroImage}
            alt="Pt. Reyes National Seashore"
          ></img>
        </div>

        {/*
        <div className="flex items-center p-3 mx-2 bg-white rounded shadow-xs sm:mx-auto">
          <code className="text-gray-600 text-xs leading-xl">
            gatsby new my-project-name
            https://github.com/melanienolan/gatsby-starter-tailwind-css
          </code>
        </div>
        */}
      </main>
    </Layout>
  )
}
