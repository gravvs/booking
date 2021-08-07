import React from "react"
import styled from 'styled-components'
import doubt from '../images/doubts.png'
import flag from '../images/flag-poland.png'
import bed from '../images/bed.png'
import plane from '../images/plane.png'
import car from '../images/car.png'
import wheel from '../images/wheel.png'
import taxi from '../images/taxi-2.png'

const HeaderWrapper = styled.div`
    background: #003580;
    color:white;
    font-family: Arial;
    display:flex;
    flex-direction:column;
    span{
        color:rgb(8, 150, 255);
    }
`

const HeaderSubwrapper = styled.div`
width:80%;
display: flex;
justify-content:space-between;
align-items:center;
max-width: 1110px;
margin: auto;
padding: 8px 0;
div p {
    font-weight: bold;
font-size: 24px;
margin: 0;
}
`

const HeaderInfo = styled.div`
    display:flex;
    align-items: center;

    div{
        padding:8px;
        margin: 2px;
        cursor:pointer;
    }
    div :nth-last-child(n+4){
        width:48px;
        height:48px;
        display:flex;
        justify-content: center;
        align-items: center;
    }
    div:hover:nth-last-child(n+3){
        background:rgba(217, 217, 217, 0.2);
    }
    div img{
        width: 24px;
        height:24px;
        border-radius:50%;
    }
`

const HeaderSquare = styled.div`
    border: 1px solid white;
    font-size:14px;
    margin-left:8px;
`
const Categories = styled.div`
display: flex;
width: 82%;
margin: auto;
justify-content: flex-start;
max-width: 1110px;
p{
    margin:0;
}
div{
    display:flex;
    align-items: center;
justify-content: center;
padding: 16px;
}
div img {
    width:20px;
    height:20px;
    margin-right: 10px;
}
div:hover{
    background: rgba(217,217,217,0.2);
}
`
const Header = () => {
    return(
    <HeaderWrapper>
        <HeaderSubwrapper>
        <div><p>Booking<span>.com</span></p></div>
        <HeaderInfo>
            <div>PLN</div>
            <div><img src={flag} alt="flag"/></div>
            <div><img src={doubt} alt="doubt"/> </div>
            <HeaderSquare>Udostępnij obiekt</HeaderSquare>
            <HeaderSquare className="white"><span>Zarejestruj się</span></HeaderSquare>
            <HeaderSquare className="white"><span>Zaloguj się</span></HeaderSquare>
        </HeaderInfo>
        </HeaderSubwrapper>
        <Categories>
            <div className="header__bed">
                <img src={bed} alt="bed"/>
                <p>Pobyty</p>
            </div>
            <div>
                <img src={plane} alt="plane"/>
                <p>Loty</p>
            </div>
            <div>
                <img src={car} alt="car"/>
                <p>Wynajem samochodów</p>
            </div>
            <div>
                <img src={wheel} alt="wheel"/>
                <p>Atrakcje</p>
            </div>
            <div>
                <img src={taxi} alt="taxi"/>
                <p>Taksówki lotniskowe</p>
            </div>
        </Categories>
    </HeaderWrapper>
)}
export default Header