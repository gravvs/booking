import React from "react"
import styled from "styled-components"
import House from "./house"

const Contact = styled.div`
  display: flex;
  div {
    padding-right: 16px;
    cursor: pointer;
  }
  img {
    width: 100%;
  }
  p{
     margin:5px 0;
  }
  h3{
    margin:8px 0;
  }
`
const Table = styled.div`
  display: flex;
  color: white;
  h3 {
    margin-top: 0;
  }
`
const ImagePosition = styled.div`
  position: absolute;
  bottom: 0;
  padding: 10px 10px 15px;
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-weight: 600;
    font-size: 14px;
  }
`
const Subwrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  position: relative;
  overflow: hidden;
`
const Biuletyn = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #e7e7e7;
  justify-content: flex-start;
  margin: 30px 0;
  width: 99%;
  align-items: center;
position: relative;
  div div {
    display: flex;
  }
  div:nth-child(3) p{
    position: absolute;
top: 0;
right: 0;
padding-right: 10px;
  }
`

const Inspiration = () => (
  <div className="inspiration">
    <div>
      <h2>Poszukaj inspiracji na kolejną podróż</h2>
      <div className="inspiration__image">
        <Table>
          <Subwrapper className="margin-1">
            <div className="inspiration__image-1"></div>
            <ImagePosition>
              <h3>5 najpiękniejszych jezior i fiordów w Europie</h3>
              <p>
                Przygody na polodowcowych wodach w Norwegii i letnie zabawy w
                prowansalkich jeziorach.
              </p>
            </ImagePosition>
          </Subwrapper>
          <Subwrapper className="margin-1">
            <div className="inspiration__image-2"></div>
            <ImagePosition>
              <h3>5 wspaniałych obiektów z prywatnym basenem</h3>
              <p>
                Ciesz się wakacjami, odpoczywając nad basenem bez krawędzi lub
                małym basenem z widokiem.
              </p>
            </ImagePosition>
          </Subwrapper>
          <Subwrapper>
            <div className="inspiration__image-3"></div>
            <ImagePosition>
              <h3>10 ciekawostek z krajów na całym świecie</h3>
              <p>
                Dodaj te miejsca do swojej listy życzeń i zobacz je na własne
                oczy, gdy przyjdzie czas.
              </p>
            </ImagePosition>
          </Subwrapper>
        </Table>
        <Table>
          <Subwrapper className="margin-1">
            <div className="inspiration__image-4"></div>
            <ImagePosition>
              <h3>Najlepsze domy wakacyjne na Santorynie</h3>
              <p>
                Spędź długie letnie dni w tych olśniewających domach na
                Santorynie.
              </p>
            </ImagePosition>
          </Subwrapper>
          <Subwrapper>
            <div className="inspiration__image-5"></div>
            <ImagePosition>
              <h3>Lokalny przewodnik po Portugalii</h3>
              <p className="inspiration__last">
                Podążaj śladami lokalnych podróżujących i odkryj Portugalię,
                której jeszcze nie widziałeś.
              </p>
            </ImagePosition>
          </Subwrapper>
        </Table>
      </div>
    </div>
    <div>
      <House />
      <div>
        <div>
          <h2> Nawiąż kontakt z innymi podróżującymi </h2>
          <Contact>
            <div>
              <img
                src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg"
                alt="picture"
              />
              <h3>Travel talk</h3>
              <p>Ogólna dyskusja</p>
              <p>559 436 podróżujących</p>
            </div>
            <div>
              <img
                src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png"
                alt="pictures"
              />
              <h3>Więcej społeczności</h3>
              <p>Zobacz Wszystkie</p>
              <p>10 103 767 podróżujących</p>
            </div>
          </Contact>
        </div>
      </div>
    </div>
    <Biuletyn>
      <div className="biuletyn__svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96px"
          height="96px"
          viewBox="0 0 32 32"
        >
          <path
            d="M15.967-.072C7.158-.072-.008 7.106-.008 15.929c0 8.822 7.166 15.999 15.975 15.999 8.837 0 16.025-7.177 16.025-15.999S24.803-.072 15.967-.072zm7.602 26.823l.034-.134c.054-.216.104-.431.157-.647a.936.936 0 0 0-1.147-1.077c-.404.117-.461-.135-.462-.144a.933.933 0 0 0-.77-.936.933.933 0 0 0-.543.062c-.246.03-.315-.106-.332-.155a.938.938 0 0 0-.772-.91 1.011 1.011 0 0 0-.486.038s-.437.01-.335-.588a.592.592 0 0 0 .009-.186l.698-5.066c.071-.654-.053-1.048-.554-1.132-.543-.09-.822.29-.914.799 0 0-1.602 7.001-1.859 9.367-.079.717-.143 1.843-.196 3.091l-.103.002c-4.35 0-8.208-2.112-10.61-5.368.19-.455.524-.986 1.105-1.529 1.589-1.488 3.391-.193 3.972.058.582.25 3.469 1.043 3.934-.464 0 0 .155-.522.116-1.565 0 0 .039-.483.775-.347.736.134 1.162-.812.406-1.605 0 0 .737-.56 1.124-1.198.388-.637-.135-.676-.251-.772-.116-.097-.426-.812.174-1.024s2.481-.541 1.609-1.933c-.872-1.391-1.512-2.145-1.802-3.265-.291-1.121-.251-1.372.136-1.874s.33-1.237.33-2.01c0-.294.035-.928-.023-1.699l-.068.119c-.556.965-1.855 1.774-2.72 2.413-1.728 1.274-3.82 1.951-5.627 3.09-1.999 1.261-3.188 3.21-3.852 5.441a19.076 19.076 0 0 0-.717 4.099c-.036.528-.031 1.09.008 1.653-2.351-4.849-1.522-10.844 2.512-14.867 2.781-2.773 6.502-4.012 10.14-3.758l-.002-.009c6.993.349 12.566 6.126 12.566 13.199 0 4.483-2.241 8.442-5.66 10.831zM13.473 9.329c.685-.495 1.112-.479 1.112-.479a.785.785 0 1 1 0 1.57.78.78 0 0 1-.578-.261c-.374-.322-.534-.83-.534-.83z"
            fill="#FEBA02"
          ></path>
        </svg>
      </div>
      <div className="biuletyn__wrapper">
        <p className="biuletyn__header">
          Zaprenumeruj biuletyn, aby zobaczyć Ukryte Oferty
        </p>
        <p>Ceny spadną od razu po zapisaniu się!</p>
        <div className="biuletyn__input">
          <div>
            <input type="email" placeholder="Wpisz adres email" required />
          </div>
          <div>
            <button>Zarejestruj się!</button>
          </div>
        </div>
      </div>
      <div>
        <p>&#x003A7;</p>
      </div>
    </Biuletyn>
  </div>
)

export default Inspiration
