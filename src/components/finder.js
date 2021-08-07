import React from "react"
import styled from "styled-components"
import calendar from "../images/calendar.png"

const FinderWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  border-bottom: 1px solid #e6e6e6;
  width: 100vw;
`
const FinderSubwrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 44px 5px;
  width: 83%;
  max-width: 1110px;
  div p {
    font-size: 14px;
  }
  input,
  label {
    cursor: pointer;
  }
`
const FinderTable = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #febb02;
  border-radius: 5px;
  width: 100%;
  height: 52px;

  button {
    border: 3px solid #febb02;
  }
  div:not(:nth-child(1)),
  button {
    cursor: pointer;
  }
  button {
    height: 100%;
    width: 40%;
    color: white;
    background: #0071c2;
    margin: 0;
  }
  button:hover {
    background: #005999;
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: white;
  }
  div img {
    padding: 0 7px;
  }
`
const Border = styled.div`
  border: 3px solid #febb02;
  height: 100%;
  div:hover {
    border: 1px solid black;
  }
`
const Finder = () => {
  return (
    <FinderWrapper>
      <FinderSubwrapper>
        <div>
          <h1>Znajdź oferty hoteli, domów i wielu innych obiektów...</h1>
          <p>Od przytulnych domków wiejskich po modne apartamenty w mieście</p>
        </div>
        <FinderTable>
          <Border>
            <div>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg"
                alt="bed"
              />
              <p>Dokąd się wybierasz?</p>
            </div>
          </Border>
          <Border>
            <div>
              <img src={calendar} alt="calendar" />
              <p>Zameldowanie - Wymeldowanie</p>
            </div>
          </Border>
          <Border>
            <div>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg"
                alt="man"
              />
              <p>2 dorosłych &#x000B7; 0 dzieci &#x000B7; 1 pokój</p>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg"
                alt="arrow"
              />
            </div>
          </Border>
          <button>Szukaj</button>
        </FinderTable>
        <div className="finder__input">
          <input type="checkbox" id="podróz" name="podróz" />
          <label>Podróżuję służbowo</label>
        </div>
      </FinderSubwrapper>
    </FinderWrapper>
  )
}

export default Finder
