import { useContext } from "react"

import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import ContactForm from "../components/ContactForm/ContactForm"
import Footer from "../components/Footer/Footer"

//COMPONENTS
import { AppContext } from "../contexts/AppContext"

function Contact () {
    const appContext = useContext(AppContext)
    return (
        <>
          <Header/> 
          <Banner title={appContext.languages[appContext.language].menu.contact} image="banner-contact.jpg"/>

            <div className="container">
                <ContactForm />
            </div>
            <Footer/>
        </>
    )
}

export default Contact