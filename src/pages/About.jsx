import { useContext } from "react"

import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AboutText from "../components/AboutText/AboutText"

//COMPONENTS
import { AppContext } from "../contexts/AppContext"

function About () {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header/> 
          <Banner title={appContext.languages[appContext.language].menu.about} image="banner-aboutus.jpg"/>

            <div className="container">
                <AboutText />
            </div>
            <Footer/>
        </>
    )
}

export default About