import React from "react"
import { StaticQuery, graphql } from "gatsby"

const DarkskyQuery = () => (
  <StaticQuery
    query={graphql`
      {
        weatherData(currently: {}) {
          id
          currently {
            summary
            temperature
            windSpeed
            humidity
            cloudCover
          }
        }
      }
    `}
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default DarkskyQuery
