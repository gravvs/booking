import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import arrowleft from "../images/arrow-left.png"
import arrowright from "../images/arrow-right.png"

const Categories = styled.div`
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`
const Object = styled.div`
  padding-right: 16px;
  cursor: pointer;
  img {
    width: 259px;
    height: 240px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    margin: 3px;
  }
  p :nth-child(4) {
    font-weight: bold;
  }
  p :nth-child(3) {
    color: grey;
  }
`
const Wrapper = styled.div`
  width: 99%;
  margin: auto;
`

const House = () => {
  const prev = () => {
    document.getElementById("scrol-house").scrollLeft -= 265
  }
  const next = () => {
    document.getElementById("scrol-house").scrollLeft += 265
  }
  const position = () => {
    const x = document.getElementById("ckros4rpk8ta90e04j3gbgxjo")
    var rect = x.getBoundingClientRect()
    if (rect.left !== 118.046875) {
      const y = document.getElementById("lefts")
      y.classList.add("visibles")
      if (rect.left === -408.953125) {
        const z = document.getElementById("rights")
        z.classList.add("unvisible")
      } else if (rect.left !== -408.953125) {
        const z = document.getElementById("rights")
        z.classList.remove("unvisible")
      }
    } else {
      document.getElementById("lefts").classList.remove("visibles")
    }
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          object {
            houses {
              thumbnail
              names
              city
              price
              grade
              number
              subnumber
              id
            }
          }
        }
      `}
      render={({ object: { houses } }) => (
        <Wrapper>
          <div>
            <h2>Domy, które goście kochają</h2>
          </div>
          <div className="poland__wrapper">
            <div
              className="arrow-left"
              id="lefts"
              onClick={function (event) {
                prev()
                position()
              }}
            >
              <img src={arrowleft} alt="arrowl" />
            </div>
            <div
              className="arrow-right"
              id="rights"
              onClick={function (event) {
                next()
                position()
              }}
            >
              <img src={arrowright} alt="arrowr" />
            </div>
            <Categories id="scrol-house">
              {houses.map(house => (
                <Object id={house.id}>
                  <img src={house.thumbnail} alt="picture" />
                  <p>{house.names}</p>
                  <p>{house.city}</p>
                  <p>Ceny od {house.price} zł</p>
                  <div className="house__opinion">
                    <div className="house__grade">
                      <p>{house.grade}</p>
                    </div>{" "}
                    <span>Znakomity</span> <span>&#x000B7;</span>{" "}
                    <span>{house.number}</span> <span>{house.subnumber}</span>{" "}
                    <span>opinii</span>
                  </div>
                </Object>
              ))}
              <div className="house__finish">
                <div>
                  <p>
                    Mamy o wiele więcej domów i apartamentów, które ci się
                    spodobają!
                  </p>
                </div>
                <div>
                  <p>Zobacz ofertę domów</p>
                </div>
              </div>
            </Categories>
          </div>
        </Wrapper>
      )}
    />
  )
}

export default House
