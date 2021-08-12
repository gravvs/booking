import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Image = styled.div`
  display: flex;
  overflow: hidden;
`
const Wrapper = styled.div`
  width: 82%;
  margin: auto;
  max-width: 1085px;
  @media only screen and (max-width: 650px){
    display:none;
  }
`
const Description = styled.div`
position:relative;
width:100%;
line-height: 30px;
transition: all,0.2s;
cursor:pointer;
:hover > p{
    line-height: 20px;
height: 135px;
vertical-align: middle;
padding: 0 15px;
text-overflow: clip;
white-space: normal;
overflow: visible;
display: flex;
justify-content: center;
align-items: center;
}
:hover ~ .discover__name{
    color: #bc5b01;
}
    p{
        position:absolute;
        top:0;
        padding: 0 15px;
margin: 0;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
color: #fff;
font-size: 13px;
text-align: center;
background-color: #c1c1c1;
background-color: rgba(0,0,0,0.3);
width:100%;
}
    }
    img{
        height:135px;
    }
`
const Subwrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    width: 20px;
    height: 20px;
    color: #fff;
    margin: 2px;
    background: #838383;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: #0071c2;
    }
    :nth-child(1) {
      background-color: #0071c2;
    }
  }
  p {
    color: rgb(0, 113, 194);
    margin: 10px;
    cursor: pointer;
    :hover {
      color: #bc5b01;
    }
  }
`
const Discover = () => {
  const next = () => {
    document.getElementById("imager").scrollLeft += 1088
  }
  const prev = () => {
    document.getElementById("imager").scrollLeft -= 50000
  }
  return (
    <StaticQuery
      query={graphql`
        query {
          object {
            discovers {
              name
              thumbnail
              description
            }
          }
        }
      `}
      render={({ object: { discovers } }) => (
        <Wrapper>
          <div>
            <div>
              <h2>Odkrywaj</h2>
            </div>
            <Subwrapper>
              <div onClick={prev}>1</div>
              <div onClick={next}>2</div>
              <div onClick={next}>3</div>
              <div onClick={next}>4</div>
              <div onClick={next}>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
              <div>10</div>
              <div>11</div>
              <p>Więcej krajów</p>
            </Subwrapper>
          </div>
          {console.log(discovers)}
          <Image id="imager">
            {discovers.map(discover => (
              <div className="discover__subwrapper">
                <Description>
                  <img src={discover.thumbnail} alt="img" />
                  <p>{discover.description}</p>
                </Description>
                <div className="discover__name">
                  <p>{discover.name}</p>
                </div>
              </div>
            ))}
          </Image>
        </Wrapper>
      )}
    />
  )
}

export default Discover
