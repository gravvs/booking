import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: #00224f;
  color: white;
  padding: 50px 0;
`
const Subwrapper = styled.div`
  margin: auto;
  width: 83%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div div {
    display: flex;
    button {
      border-radius: 3px;
      border: 0;
      padding: 0 15px;
      font-size: 20px;
      background-color: #0071c2;
      margin: 0 5px;
      color: white;
    }
  }
  h2 {
    margin-bottom: 0;
  }
`
const Subscription = () => {
  return (
    <Wrapper>
      <Subwrapper>
        <h2>Oszczędzaj czas i pieniądze!</h2>
        <p className="subscription__paragraph">
          Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty
        </p>
        <div className="subscription__frame">
          <div className="subscription__mail">
            <input
              type="email"
              id="email"
              placeholder="Adres mailowy"
              required
            />
            <button>Zaprenumeruj</button>
          </div>
          <div>
            <input type="checkbox" id="subscription" name="subscription" />
            <label>
              Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
            </label>
          </div>
        </div>
      </Subwrapper>
    </Wrapper>
  )
}

export default Subscription
