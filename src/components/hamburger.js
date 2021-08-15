import React from "react"
import styled from "styled-components"
import smartphone from "../images/smartphone.png"
import home from '../images/home.png'
import question from '../images/question.svg'
import discount from '../images/discount.svg'
import book from '../images/book.svg'
import user from '../images/user.svg'

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  transition: transform 0.3s ease-in-out;
  div{
      display:flex;
      align-items: center;
justify-content: center;
      img{
          width:30px;
          height: 30px;
      }
  }
  div p{
      font-size: 15px;
  }

  @media (max-width: 576px) {
    width: 100%;
    background-color: white;
  }
  
  p,h3,h2{
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: bold;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1,5rem;
    }
  }
  p:hover{
      background-color: rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`

const Menu = ({ open, setOpen, manageShow,manageOpen }) => {
  return (
    <StyledMenu open={open}>
        <p onClick={function (event) {
            manageOpen()
            manageShow()
            }} className="burger__x">x</p>
      <h2>Więcej</h2>
      <div>
        <p>PLN</p>
        <p>Złoty polski</p>
      </div>
      <div>
        <img src="https://cf.bstatic.com/static/img/flags/new/48-squared/pl/4d6b6e962b0b049a03924fc618b959395d60ae39.png" />
        <p>Polski</p>
      </div>
      <div>
        <img src={smartphone} />
        <p>Pobierz aplikację</p>
      </div>
      <div>
        <img src={home} />
        <p>Zarejestruj swój obiekt</p>
      </div>
      <h3>Pomoc i wsparcie</h3>
      <div>
          <img src={question} />
        <p>Skontaktuj sie z obsługą klienta</p>
      </div>
      <h3>Inspiracje</h3>
      <div>
          <img src={discount} />
        <p>Oferty</p>
      </div>
      <div>
          <img src={book} />
        <p>Artykuły podróznicze</p>
      </div>
      <div>
          <img src={user} />
        <p>Społeczności podróżujących</p>
      </div>
      <h3>Ustawienia i informacje prawne</h3>
      <div>
        <p>O Booking.com</p>
      </div>
      <div>
        <p>Oferty pracy</p>
      </div>
      <div>
        <p>Zostań Partnerem Afiliacyjnym</p>
      </div>
      <div>
        <p>Informacje prasowe</p>
      </div>
      <div>
        <p>Prywatność i ciasteczka</p>
      </div>
      <div>
        <p>Warunki</p>
      </div>
      <div>
        <p>Informacje prawne</p>
      </div>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  top: 5%;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 25px;

  @media (max-width: 650px) {
    display: flex;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen, manageShow, manageOpen}) => {
  return (
    <StyledBurger open={open} onClick={function (event) {
        manageOpen()
        manageShow()
        }}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const Hamburgermenu = ({manageShow, show}) => {
  const [open, setOpen] = React.useState(false)
  const manageOpen = () => {setOpen(!open)};
  return (
    <div>
      <div>
        <Burger open={open} setOpen={setOpen} manageShow={manageShow} show={show} manageOpen={manageOpen}/>
        <Menu open={open} setOpen={setOpen} manageShow={manageShow} show={show} manageOpen={manageOpen}/>
      </div>
    </div>
  )
}
export default Hamburgermenu
