import { createContext, useState, useEffect } from "react"
import { getApiData } from "../services/apiServices"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const saveLanguage = localStorage.getItem('lang')
    const [language, setLanguage] = useState(saveLanguage ?? 'br')
    const [languages, setLanguages ] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchLanguages = async () => {
            try{
                const getTexts = await getApiData('webtext')
                setLanguages(getTexts)
            }catch (error){
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        fetchLanguages()

    }, [])

    useEffect(()=>{
        localStorage.setItem('lang', language)
    }, [language])

    return (
        <AppContext.Provider value={{language, languages, setLanguage, loading}}>
            { children }
        </AppContext.Provider>
    )

}