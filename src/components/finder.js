import { number } from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import calendar from "../images/calendar.png"
import Calendar from "./calendar"
import Room from "./room"

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

  div:not(:nth-child(1)),
  button {
    cursor: pointer;
  }

@media only screen and (max-width: 650px){
    flex-wrap: wrap;
    border: none;
}
`
const Table = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  :hover {
    border: 1px solid black;
  }

  img {
    padding: 0 7px;
  }
`
const Border = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: white;

  border: 3px solid #febb02;
  height: 52px;
`
const Finder = () => {
  const [x, setX] = useState(2)
  const [y, setY] = useState(0)
  const [z, setZ] = useState(1)
  const [hide, setHide] = useState(false);
  const [hides, setHides] = useState(false);
  const [zameldowanie, setZameldowanie] = useState("Zameldowanie");
  const [wymeldowanie, setWymeldowanie] = useState("Wymeldowanie");

  const showPopup = () => {
    if (hides) {
      setHides(!hides);
      setHide(!hide);
    } else {
      setHide(!hide);
    }
  }
  const showPopups = () => {
    if (hide) {
      setHide(!hide);
      setHides(!hides);
    } else {
      setHides(!hides);
    }
  }

  const setObject = (e) => {
    if(zameldowanie !== "Zameldowanie") {
      setWymeldowanie(e);
      console.log(zameldowanie)
      console.log(typeof(wymeldowanie))
    }
    else{
    setZameldowanie(e);
    }
  };
  return (
    <FinderWrapper>
      <FinderSubwrapper>
        <div>
          <h1>Znajd?? oferty hoteli, dom??w i wielu innych obiekt??w...</h1>
          <p>Od przytulnych domk??w wiejskich po modne apartamenty w mie??cie</p>
        </div>
        <FinderTable className="finder__table">
          <Border>
            <Table>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/accommodation/07ca5cacc9d77a7b50ca3c424ecd606114d9be75.svg"
                alt="bed"
              />
              <p>Dok??d si?? wybierasz?</p>
            </Table>
          </Border>
          <Border >
            <Table onClick={showPopup}>
              <img src={calendar} alt="calendar" />
              <p>{zameldowanie} - {wymeldowanie}</p>
            </Table>
            {hide && <Calendar setObject={setObject}/>}
          </Border>
          <Border>
            <Table onClick={showPopups}>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg"
                alt="man"
              />
              <p>{x} doros??ych &#x000B7; {y} dzieci &#x000B7; {z} pok??j</p>
              <img
                src="//cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg"
                alt="arrow"
              />
            </Table>
            {hides && <Room x={x} y={y} z={z} setX={setX} setY={setY} setZ={setZ}/>}
          </Border>
          <button className="search">Szukaj</button>
        </FinderTable>
        <div className="finder__input">
          <input type="checkbox" id="podr??z" name="podr??z" />
          <label>Podr????uj?? s??u??bowo</label>
        </div>
      </FinderSubwrapper>
    </FinderWrapper>
  )
}

export default Finder
