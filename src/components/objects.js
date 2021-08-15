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
  div:not(:last-child) {
    padding-right: 16px;
  }
`
const Object = styled.div`
  img {
    width: 207px;
    height: 180px;
    cursor: pointer;
  }
  p {
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 0;
  }
  span {
    font-size: 14px;
  }
  @media only screen and (max-width: 450px){
    img{
    width:120px;
    height:120px;
  }}
`

const Objects = () => {
  const prev = () => {
    document.getElementById("scrol2").scrollLeft -= 223
  }
  const next = () => {
    document.getElementById("scrol2").scrollLeft += 223
  }
  const position = () => {
    const x = document.getElementById("ckr983i5k1swx0b015bjkiy4h")
    var rect = x.getBoundingClientRect()
    if (rect.left !== 112.546875) {
      const y = document.getElementById("lef")
      y.classList.add("visibles")
      if (rect.left === -4124.453125) {
        const z = document.getElementById("righ")
        z.classList.add("unvisible")
      } else if (rect.left !== -4124.453125) {
        const z = document.getElementById("righ")
        z.classList.remove("unvisible")
      }
    } else {
      document.getElementById("lef").classList.remove("visibles")
    }
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          object {
            categoria {
              categorie
              number
              what
              thumbnail
              subnumber
              id
            }
          }
        }
      `}
      render={({ object: { categoria } }) => (
        <div>
          <div>
            <h2>Szukaj według rodzaju obiektu</h2>
          </div>
          <div className="object__wrapper">
            <div
              className="arrow-left"
              id="lef"
              onClick={function (event) {
                prev()
                position()
              }}
            >
              <img src={arrowleft} alt="arrowl" />
            </div>
            <div
              className="arrow-right"
              id="righ"
              onClick={function (event) {
                next()
                position()
              }}
            >
              <img src={arrowright} alt="arrowr" />
            </div>
            <Categories id="scrol2">
              {categoria.map(categori => (
                <Object id={categori.id}>
                  <img src={categori.thumbnail} alt="picture" />
                  <p>{categori.categorie}</p>
                  <span>{categori.number}</span>{" "}
                  <span>{categori.subnumber}</span> <span>{categori.what}</span>
                </Object>
              ))}
            </Categories>
          </div>
        </div>
      )}
    />
  )
}

export default Objects
