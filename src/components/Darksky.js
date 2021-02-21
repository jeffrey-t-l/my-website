import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Darksky = () => (
  <StaticQuery
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
    `}
    render={data => <pre>{JSON.stringify(data.weatherData, null, 4)}</pre>}
  ></StaticQuery>
)

export default Darksky