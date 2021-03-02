import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Darksky = () => (
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
    render={data => <pre>{JSON.stringify(data.weatherData.currently.summary, null, 4)}</pre>}
  ></StaticQuery>
)
console.log(Darksky)
export default Darksky