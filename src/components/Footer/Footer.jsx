import { useContext } from "react"
import { Link } from "react-router-dom"

//ASSETS
import './Footer.css'
import BrasilLogo from '../../assets/brazil_flag.svg'
import UsaLogo from '../../assets/usa_flag.svg'
import LogoFace from '../../assets/logo-facebook.svg'
import LogoLinkedin from '../../assets/logo-linkedin.svg'
import LogoInsta from '../../assets/logo-insta.svg'
import LogoTwittwer from '../../assets/logo-tt.svg'
import Logo from "../../assets/dnc-logo.svg"

//CONTEXT
import { AppContext } from "../../contexts/AppContext"

//COMPONENT
import Button from "../Button/Button"


function Footer() {

    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="dp-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className="footer-logo"/>
                        <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className="dp-flex social-links">
                            <a href="https://facebook.com" target="_blank">
                                <img src={LogoFace} />
                            </a>
                            <a href="https://x.com" target="_blank">
                                <img src={LogoTwittwer} />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <img src={LogoLinkedin} />
                            </a>
                            <a href="https://instagram.com" target="_blank">
                                <img src={LogoInsta} />
                            </a>
                        </div>

                    </div>
                    <div className="dp-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li> <Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li> <Link to="/About">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li> <Link to="/Projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li> <Link to="/Contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appContext.languages[appContext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br </p>
                            <p className="grey-1-color">(19) 99187-4342 </p>
                        </div>
                    </div>
                </div>
                <div className="dp-flex jc-space-between footer-copy">
                    <p className="grey-1-color"> Copyright © DNC - 2024</p>
                    <div className="langs-area dp-flex">
                        <Button buttonStyle="unstyled" onClick={()=> changeLanguage('br')}>
                            <img src={BrasilLogo} height="29px" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={()=> changeLanguage('en')}>
                            <img src={UsaLogo} height="29px" />
                        </Button>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer