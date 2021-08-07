import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Tab from "../components/tab"
import Tabs from "../components/tabs"

const Place = () => (
      <StaticQuery
      query={graphql`
        query {
          object {  
            regionies {
            name
            number
          }
          miastas {
            name
            number
          }
          ciekawes {
            name
            number
          }
          }
        }
      `}
      render={({ object: { regionies, miastas, ciekawes } }) => (
    <Tabs>
      <Tab title="Regiony">
      {regionies.map(region => (
          <div>
              <p>{region.name}</p>
              <p>{region.number}</p>
          </div>
      ))}
      </Tab>
      <Tab title="Miasta">
      {miastas.map(miasta => (
          <div>
              <p>{miasta.name}</p>
              <p>{miasta.number}</p>
          </div>
      ))}
      </Tab>
      <Tab title="Ciekawe miejsca">
      {ciekawes.map(ciekawe => (
          <div>
              <p>{ciekawe.name}</p>
              <p>{ciekawe.number}</p>
          </div>
      ))}
      </Tab>
    </Tabs>
      )}
    />
  )
export default Place
