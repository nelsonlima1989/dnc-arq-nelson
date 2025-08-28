import { useContext, useEffect, useState } from 'react'
import './ContactForm.css'

// COMPONENTS
import { AppContext } from '../../contexts/AppContext'
import Button from '../Button/Button'

function ContactForm () {
      const appContext = useContext(AppContext)  
      const [formData, setFormData] = useState({ 
        name: "",
        email: "",
        message: ""
     })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmited, setFormSubmited] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isFormValid){
         setFormSubmitLoading(true)
            try{
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "d77cde54-758a-4924-8c0b-08b0547506e6"})
                })
                
                if (response.ok){
                    setFormSubmited(true)
                }else{
                    alert('Erro ao enviar formulário!')
                }
            } catch (error) {

                alert('Erro: ', error)

            } finally {
                setFormSubmitLoading(false)
            }
        }
    }

    useEffect(()=>{
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }

        const isValid = 

         formData.name.trim() &&
         formData.email.trim() && 
         isValidEmail(formData.email) &&
         formData.message.trim() 

        setIsFormValid(isValid)
         

    }, [formData])  

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData ({
            ...formData,
            [name]: value
        })
    }

    return (
            <div className='container'>
                
                <div className='contact-form dp-flex fd-colum al-center'>
                    <h2>{appContext.languages[appContext.language].contact.title}</h2>
                    <form onSubmit={handleSubmit}>
                         <div className='dp-flex form-group'>
                            <input 
                                className='form-input' 
                                type="text"
                                id='name'
                                name='name' 
                                placeholder={appContext.languages[appContext.language].contact.pl1}
                                onChange={handleChange}
                                />
                            <input 
                                className='form-input' 
                                type="email"
                                id='email'
                                name='email' 
                                placeholder={appContext.languages[appContext.language].contact.pl2}
                                onChange={handleChange}
                                />  
       
                         </div>
                        <div className='dp-flex form-group'>                                                            
                            <textarea 
                                className='form-input'
                                name="message" 
                                id="message"
                                placeholder={appContext.languages[appContext.language].contact.pl3}
                                onChange={handleChange}
                                rows="4"
                            ></textarea> 
                        </div> 
                        <div className='al-center dp-flex jc-end form-group'>
                            {formSubmited && <p className='text-primary'>{appContext.languages[appContext.language].contact.successMsg}</p>}                        
                            <Button 
                                    type="submit" 
                                    buttonStyle="secondary"
                                    disabled={!isFormValid || formSubmitLoading}>
                                        {appContext.languages[appContext.language].general.send}
                            </Button>
                        </div> 
                    </form>
                </div>
                

            </div>

    )
}

export default ContactForm