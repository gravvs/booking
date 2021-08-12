import React, { useState } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 370px;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 12px;
  background: #fff;
  padding: 24px 24px 8px;
  min-width: 308px;
  border-radius: 4px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  z-index: 3;
`

const Subwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-color: #0071c2;
    border-style: solid;
    :hover {
      background: rgba(217, 217, 217, 0.2);
    }
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    display: block;
    text-align: center;
    min-width: 36px;
    margin: 0 4px;
  }
`

const Room = ({x,y,z,setX,setY,setZ}) => {
  return (
    <Wrapper>
      <Subwrapper>
        <div>
          <p>Dorośli</p>
        </div>
        <Buttons>
          <button onClick={() => setX(x - 1)}>-</button>
          <span>{x}</span>
          <button onClick={() => setX(x + 1)}>+</button>
        </Buttons>
      </Subwrapper>
      <Subwrapper>
        <div>
          <p className="room__kids">Dzieci</p>
          <span className="room__age">w wieku od 0 do 17 lat</span>
        </div>
        <Buttons>
          <button onClick={() => setY(y - 1)}>-</button>
          <span>{y}</span>
          <button onClick={() => setY(y + 1)}>+</button>
        </Buttons>
      </Subwrapper>
      <Subwrapper>
        <div>
          <p>Pokoje</p>
        </div>
        <Buttons>
          <button onClick={() => setZ(z - 1)}>-</button>
          <span>{z}</span>
          <button onClick={() => setZ(z + 1)}>+</button>
        </Buttons>
      </Subwrapper>
    </Wrapper>
  )
}
export default Room
