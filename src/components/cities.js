import React from "react"
import styled from "styled-components"
import arrowleft from "../images/arrow-left.png"
import arrowright from "../images/arrow-right.png"

const Wrapper = styled.div`
  width: 82%;
  margin: auto;
  max-width: 1110px;
  position: relative;
  @media only screen and (max-width: 650px){
    display:none;
  }
`
const Slideshow = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }
`
const Subwrapper = styled.div`
  padding-right: 16px;
  span {
    font-weight: normal;
    text-decoration: underline;
    color: #5bbaff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`
const Subwrappers = styled.div`
  padding-right: 0;
  span {
    font-weight: normal;
    text-decoration: underline;
    color: #5bbaff;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`
const Image = styled.div`
  position: relative;
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      0deg,
      #000 0,
      rgba(0, 0, 0, 0.8) 50%,
      transparent
    );
    color: white;
    width: 100%;
    padding: 16px;
    p {
      margin: 0;
      font-size: 14px;
    }
    h3 {
      margin: 0;
    }
  }
  img {
    width: 263px;
    height: 197px;
  }
`
const Text = styled.div`
  margin: 14px 0;
  span {
    cursor: pointer;
    :hover {
      color: #febb02;
    }
  }
`

const Cities = () => {
  const prev = () => {
    document.getElementById("scrole").scrollLeft -= 290
  }
  const next = () => {
    document.getElementById("scrole").scrollLeft += 290
  }
  const position = () => {
    const x = document.getElementById("first")
    var rect = x.getBoundingClientRect()
    console.log(rect.left)
    if (rect.left !== 119.15625) {
      const y = document.getElementById("leftr")
      y.classList.add("visibles")
      if (rect.left === -452.84375) {
        const z = document.getElementById("rightr")
        z.classList.add("unvisible")
      } else if (rect.left !== -452.84375) {
        const z = document.getElementById("rightr")
        z.classList.remove("unvisible")
      }
    } else {
      document.getElementById("leftr").classList.remove("visibles")
    }
  }
  return (
    <Wrapper>
      <div
        className="arrow-left"
        id="leftr"
        onClick={function (event) {
          prev()
          position()
        }}
      >
        <img src={arrowleft} alt="arrowl" />
      </div>
      <div
        className="arrow-right"
        id="rightr"
        onClick={function (event) {
          next()
          position()
        }}
      >
        <img src={arrowright} alt="arrowr" />
      </div>
      <Slideshow id="scrole">
        <Subwrapper id="first">
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/711920.jpg?k=93cd5aa61b0dbe026cda8b294980a0c00e90770744f4890cc255ae2df6fff802&o="
              alt="Kielce"
            />
            <div>
              <h3>Kielce</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>168 obiektów na wynajem sezonowy,</span>{" "}
            <span>152 apartamenty,</span> <span>10 kwater prywatnych,</span>{" "}
            <span>10 obiektów B&#x00026;B,</span> <span>7 pensjonatów,</span>{" "}
          </Text>
        </Subwrapper>
        <Subwrapper>
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/940296.jpg?k=1eee11b9488c38a5fcb21068b0f3604a4c89c54d79872280049e9bbdcf84bd7f&o="
              alt="Płock"
            />
            <div>
              <h3>Płock</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>44 obiekty na wynajem sezonowy,</span>{" "}
            <span>37 apartamentów,</span> <span>5 obiektów B&#x00026;B,</span>{" "}
            <span>3 kwatery prywatne,</span>{" "}
          </Text>
        </Subwrapper>
        <Subwrapper>
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/653060.jpg?k=2496bd5ff6f97cfa09ac95444320d9b20e949e81545e2a5d520fb54b2b156237&o="
              alt="Toruń"
            />
            <div>
              <h3>Toruń</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>415 obiektów na wynajem sezonowy,</span>{" "}
            <span>400 apartamentów,</span> <span>16 kwater prywatnych,</span>{" "}
            <span>14 hosteli,</span> <span>10 hoteli apartamentowych,</span>{" "}
          </Text>
        </Subwrapper>
        <Subwrapper>
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/646175.jpg?k=2702a51407e53a8336288b7238ad87d2d579a4da2311775263152ead163f5f6b&o="
              alt="Bydgoszcz"
            />
            <div>
              <h3>Bydgoszcz</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>115 obiektów na wynajem sezonowy,</span>{" "}
            <span>106 apartamentów,</span> <span>13 hosteli,</span>{" "}
            <span>8 hoteli apartamentowych,</span>{" "}
            <span>6 obiektów B&#x00026;B,</span>{" "}
          </Text>
        </Subwrapper>
        <Subwrapper>
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/652899.jpg?k=260ba3e03b0e5ad10563760de2b241f83f847cdc5d49e01b2956842c4cb68dca&o="
              alt="Katowice"
            />
            <div>
              <h3>Katowice</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>201 obiektów na wynajem sezonowy,</span>{" "}
            <span>191 apartamentów,</span> <span>19 hosteli,</span>{" "}
            <span>13 kwater prywatnych,</span>{" "}
            <span>13 hoteli apartamentowych,</span>{" "}
          </Text>
        </Subwrapper>
        <Subwrappers>
          <Image>
            <img
              src="https://cf.bstatic.com/xdata/images/city/400x300/653054.jpg?k=7a9cdb5d930bc22dd126d62ab9ed9226de353cc9dee602cc7f1a2116655591d5&o="
              alt="Szklarska Poręba"
            />
            <div>
              <h3>Szklarska Poręba</h3>
              <p>Polska</p>
            </div>
          </Image>
          <Text>
            <span>542 obiekty na wynajem sezonowy,</span>{" "}
            <span>380 apartamentów,</span> <span>78 kwater prywatnych,</span>{" "}
            <span>64 obiekty B&#x00026;B,</span>{" "}
            <span>29 domów wakacyjnych,</span>{" "}
          </Text>
        </Subwrappers>
      </Slideshow>
    </Wrapper>
  )
}
export default Cities
