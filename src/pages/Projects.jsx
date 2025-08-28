import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import ProjectList from "../components/ProjectList/ProjectList"
import Footer from "../components/Footer/Footer"

//COMPONENTS
import { AppContext } from "../contexts/AppContext"



function Projects () {
    const appContext = useContext(AppContext)

    return (
        <>
          <Header/> 
          <Banner title={appContext.languages[appContext.language].menu.projects} image="banner-projects.jpg"/>

            <div className="container">
                <ProjectList />
            </div>
            <Footer/>
        </>
    )
}

export default Projects