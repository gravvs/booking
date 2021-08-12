import React, { useState } from "react"
import styled from "styled-components"
import info from "../images/info.png"
import arrow from "../images/arrow.png"

const Koronawirus = styled.div`
  background-color: #fff0e0;
  display: flex;
`
const Subheader = styled.div`
  width: 81%;
  max-width: 1110px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  div :not(:nth-child(2)) {
    margin-top: 12px;
  }
  div img {
    width: 24px;
    height: 24px;
  }
`
const Info = styled.div`
  width: 100%;
  flex-direction: column;
  margin: 0 10px;
  cursor: pointer;
  div p:nth-child(2) {
    color: #0071c2;
  }
`

const Coronavirus = () => {
  const [hide, setHide] = useState(false)
  const showBar = () => {
    setHide(!hide)
  }
  const active = hide ? "normal" : "turned"
  return (
    <Koronawirus>
      <Subheader>
        <div>
          <img src={info} alt="info" />
        </div>
        <Info onClick={showBar}>
          <p className="coronavirus__title">
            Koronawirus (COVID-19) - wsparcie
          </p>
          {hide && (
            <div>
              <p>
                Uzyskaj porady dotyczące podróżowania, których potrzebujesz.
                Dowiedz się o możliwych ograniczeniach, zanim wyruszysz w
                podróż.
              </p>
              <p>Dowiedz się więcej</p>
            </div>
          )}
        </Info>
        <div onClick={showBar}>
          <img src={arrow} alt="arrow" className={active} />
        </div>
      </Subheader>
    </Koronawirus>
  )
}

export default Coronavirus
