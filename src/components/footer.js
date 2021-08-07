import React from "react"
import styled from "styled-components"

const Info = styled.div`
    display:flex;
    width: 100%;
    justify-content:center;
    div{
        margin: 0;
width: 20%;
padding: 0 10px 0 0;
    p{
        color:#0071C2;
        cursor: pointer;
        margin:10px 0;
        font-size:14px
    }
}
    div p:hover{
        color:#bc5b01;
    }
`
const Footers = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 1110px;
    margin:auto;
`
const Subfooter = styled.div`
    display:flex;
    background: #003580;
    color:white;
    justify-content:center;
    p{
    padding: 0 5px;
    text-decoration: underline;
    cursor: pointer;
    }
`
const Login = styled.div`
width: 80%;
max-width: 1110px;
div:nth-child(2) p{
    font-size:12px;
}
`
const Sublogin = styled.div`
display: flex;
justify-content: center;
color: #0071c2;
font-weight: bold;
p{
    cursor: pointer;
}
p:hover{
    color:#bc5b01;
}
`

const Title = styled.div`
margin-bottom:35px;
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
    div p{
    font-size: 12px;
    }
    div{
        width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    div img {
        padding: 0 20px;
    }
`

const Footer = () => (
    <Footers>
        <div className="footer__menu">
            <div className="footer__submenu"><p>Udostępnij obiekt</p></div>
        </div>
        <div className="footer__menu">
            <Subfooter>
                <div className="footer__paragrapgh">
                <p>Wersja na telefon</p>
                <p>Twoje konto</p>
                <p>Wprowadzaj zmiany w rezerwacji online</p>
                <p>Skontaktuj sie z obsługą klienta</p>
                <p>Zostań naszym Partnerem Afiliacyjnym</p>
                </div>
            </Subfooter>
            <Subfooter>
                <div className="footer__paragrapgh">
                <p>Booking.com dla Biznesu</p>
                </div>
            </Subfooter>
        </div>
        <Info>
            <div>
                <p>Kraje</p>
                <p>Regiony</p>
                <p>Miasta</p>
                <p>Dzielnice</p>
                <p>Lotnika</p>
                <p>Hotele</p>
                <p>Ciekawe miejsca</p>
            </div>
            <div>
                <p>Domy</p>
                <p>Apartamenty</p>
                <p>Ośrodki wypoczynkowe</p>
                <p>Wille</p>
                <p>Hostele</p>
                <p>Obiekty B&#x00026;B</p>
                <p>Pensjonaty</p>
            </div>
            <div>
                <p>Wyjątkowe miejsca na pobyt</p>
                <p>Wszystkie cele podróży</p>
                <p>Opinie</p>
                <p>Społeczności podróżujących</p>
                <p>Oferty sezonowe i wakacyjne</p>
            </div>
            <div>
                <p>Wypożyczalnia samochodów</p>
                <p>Wyszukiwarka lotów</p>
                <p>Rezerwacja restauracji</p>
                <p>Booking.com dla Biur Podróży</p>
            </div>
            <div>
                <p>Często zadawane pytania dotyczące koronawirusa (COVID-19)</p>
                <p>O Booking.com</p>
                <p>Skontaktuj się z obsługą klienta</p>
                <p>Centrum pomocy</p>
                <p>Careers</p>
                <p>Zrównoważony rozwój</p>
                <p>Informacje prasowe</p>
                <p>Centrum zasobów biezpieczeństwa</p>
                <p>Relacje z inwestorami</p>
                <p>Ogólne Warunki Handlowe</p>
                <p>Rozstrzyganie sporów</p>
                <p>Zasady współpracy</p>
                <p>Oświadczenie o ochronie prywatności i plikach cookies</p>
                <p>Zarządzaj ustawieniami dotyczącymi plików cookie</p>
                <p>Kontakt dla firm</p>
            </div>
        </Info>
        <Login>
            <Sublogin><p>Logowanie do Extranetu</p></Sublogin>
            <div><p>Prawa autorskie &#x000A9; 1996-2021 Booking.com&#x02122;. Wszelkie prawa zastrzeżone.</p></div>
        </Login>
        <Title>
            <div>
                <p>Booking.com jest częścią Booking Holdings Inc. - światowego lidera w internetowej branży turystycznej.</p>
            </div>
            <div>
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="booking"/>
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="priceline" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="kayak" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="agoda" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="rentalcars" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="opentable" />
            </div>
        </Title>
    </Footers>
)

export default Footer;