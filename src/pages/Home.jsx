import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import ProjectList from "../components/ProjectList/ProjectList"

function Home () {
    return (
        <>

            <Header/>            
            <div className="container">
                <Hero />
                <ProjectList />
            </div>
            <Footer/>
        </>
    )
}

export default Home