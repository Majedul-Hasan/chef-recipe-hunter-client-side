import { useState } from "react"

const useHomeLoader = async () => {
    const [isLoading, setIsLoading] = useState(true)
    const [chefsData, setChefsData] = useState([])

    try {
        const loadedChefs = await fetch (`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)
        const chefs = await loadedChefs.json();
        setChefsData(chefs)
        setIsLoading(false)

        return {
            chefsData,
            isLoading
         }
        
    } catch (error) {
        console.log(error);        
    }    
    
}

export default useHomeLoader