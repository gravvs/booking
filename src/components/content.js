import React from "react"
import Objects from "./objects"
import styled from "styled-components"
import Poland from "./poland"

const Image = styled.div`
  position: relative;
  height: 270px;
  margin-top: 15px;
  :hover{
    border: 1px solid #febb02;
  }
`

const ImageText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  padding-left:10px;
  div {
    display: flex;
    align-items: center;
  }
  div img {
    width: 24px;
    height: 24px;
    padding-left: 5px;
  }
  div p {
    font-size: 28px;
    font-weight: bold;
  }
`

const ImageParagraph = styled.p`
  margin-top: -20px;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Content = () => {
  return (
    <div className="content">
      <div>
        <ContentWrapper>
          <Image className="content__image-1">
            <ImageText>
              <div>
                <p>Sixt</p>
                <img src="https://cf.bstatic.com/static/img/flags/24/fr/c3dafe717a0b4b97e6ddd0d791e8a018d8f96310.png?fbclid=IwAR0xBnid2raxrvFOmhGIv5IxxH7bR8g60gYyzYjysC5q30djPAj67uOWJpU" alt="sixt"/>
              </div>
              <ImageParagraph className="">21 obiektów</ImageParagraph>
            </ImageText>
          </Image>
          <Image className="content__image-2">
            <ImageText>
              <div>
                <p>Bransgore</p>
                <img src="https://cf.bstatic.com/static/img/flags/24/gb/b2f01d4fd94cb1420fcdbbef62c06ade1026fbbd.png?fbclid=IwAR3KmFNkX6FbnkcOGPAVitzeUhFAPWnBaM0F3A-mEJkFB4h3vyUvsJ9AW9I" alt="bransgore"/>
              </div>
              <ImageParagraph>4 obiekty</ImageParagraph>
            </ImageText>
          </Image>
        </ContentWrapper>
        <ContentWrapper>
          <Image className="content__image-3">
            <ImageText>
              <div>
                <p>Cala Anguila</p>
                <img src="https://cf.bstatic.com/static/img/flags/24/es/a14721d7698af5131b08bd34227508c729ab11bc.png?fbclid=IwAR1ZoolV695qFT-l22c7nqkx1G1k0NG72S0ScWmZDRYJdoKRPM-pzh64GrU" alt="cala anguila"/>
              </div>
              <ImageParagraph>10 obiektów</ImageParagraph>
            </ImageText>
          </Image>
          <Image className="content__image-4">
            <ImageText>
              <div>
                <p>Chiusanico</p>
                <img src="https://cf.bstatic.com/static/img/flags/24/it/b539a003f197845e447b9d00d91cd74dd57bf3dd.png?fbclid=IwAR3KmFNkX6FbnkcOGPAVitzeUhFAPWnBaM0F3A-mEJkFB4h3vyUvsJ9AW9I" alt="chiusanico"/>
              </div>
              <ImageParagraph>6 obiektów</ImageParagraph>
            </ImageText>
          </Image>
          <Image className="content__image-5">
            <ImageText>
              <div>
                <p>Kavousion</p>
                <img src="https://cf.bstatic.com/static/img/flags/24/gr/6863a8c81b841fd9a738f543550ec32c87bfafc0.png?fbclid=IwAR3Aa22PY5AS0J97OjW0T-YI6eI2eTzWIGRDqVMDwAUuXtfVnrqC_gemtm8" alt="kavousion"/>
              </div>
              <ImageParagraph>7 obiektów</ImageParagraph>
            </ImageText>
          </Image>
        </ContentWrapper>
      </div>
      <Poland />
      <Objects />
    </div>
  )
}
export default Content
