import * as React from "react"
import Header from "../components/header"
import Finder from "../components/finder"
import Content from "../components/content"
import Footer from "../components/footer"
import Inspiration from "../components/inspiration"
import "../components/projekt.css"
import Coronavirus from "../components/coronavirus"
import Subscription from "../components/subscription"
import Place from "../components/place"
import Discover from "../components/discover"
import Cities from "../components/cities"
import { useState } from 'react'


const IndexPage = () => {

const [show, setShow] = useState(false);
const manageShow = () => {
  setShow(!show)
};
const showMe = show ? "index__height" : "index__wrapper" ;
return(
  <div className={showMe}>
    <Header manageShow={manageShow} show={show}/>
    <Coronavirus />
    <Finder />
    <Content />
    <Inspiration />
    <Cities />
    <Place />
    <Discover />
    <Subscription />
    <Footer />
  </div>
)
}

export default IndexPage
