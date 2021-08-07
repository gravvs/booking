import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import arrowleft from "../images/arrow-left.png"
import arrowright from "../images/arrow-right.png"

const Categories = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
  div:not(:last-child){
    padding-right: 16px;
  }
`
const Object = styled.div`
  cursor: pointer;
  img {
    width: 207px;
    height: 180px;
  }
  p {
    font-weight: 700;
    margin-bottom: 0;
  }
  span {
    font-size: 14px;
  }
`
const Poland = () => {

  const prev = () => {
    document.getElementById("scrol").scrollLeft -= 223
  }
  const next = () => {
    document.getElementById("scrol").scrollLeft += 223
  }
  const position = () => {
    const x = document.getElementById("ckrj0vkbcyhir0b99d4zgy7u8");
    var rect = x.getBoundingClientRect()
    if(rect.left !== 112.546875){
      const y = document.getElementById("left");
      y.classList.add("visibles")
    if(rect.left === -1002.453125){
      const z = document.getElementById("right");
      z.classList.add("unvisible")
    }
    else if(rect.left !== -1002.453125){
      const z = document.getElementById("right");
      z.classList.remove("unvisible")
    }
    }
    else{
      document.getElementById("left").classList.remove("visibles")
    }
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          object {
            polands {
              thumbnail
              city
              numbers
              id
            }
          }
        }
      `}
      render={({ object: { polands } }) => (
        <div>
          <div>
            <h2>Polska - odkryj to miejsce</h2>
            <p>Te popularne miejsca mają wiele do zaoferowania</p>
          </div>
          <div className="poland__wrapper">
            <div className="arrow-left" id="left" onClick={function(event) {prev();position()}}>
              <img src={arrowleft} alt="arrowl"/>
            </div>
            <div className="arrow-right" id="right" onClick={function(event) {next();position()}}>
              <img src={arrowright} alt="arrowr"/>
            </div>
            <Categories id="scrol">
              {polands.map(poland => (
                <Object key={poland.id} id={poland.id}>
                  <img src={poland.thumbnail} alt="picture"/>
                  <p>{poland.city}</p>
                  <span>{poland.numbers}</span> <span>obiektów</span>
                </Object>
              ))}
            </Categories>
          </div>
        </div>
      )}
    />
  )
}

export default Poland
