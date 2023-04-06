import React, { Children, useContext } from "react";
import axios from "axios";
const AppContext = React.createContext();
const AppProvider=({children})=>{
    const [product,productup] = React.useState([])
    const [original,originalup] = React.useState([])

    const Url ='https://dummyjson.com/products'
    React.useEffect(()=>{
        axios.get(Url).then((response)=>{
            productup(response.data.products)
            originalup(response.data.products)
        })
    },[])
    const [mode,modeup] = React.useState(false) 
    function Mode(){
        modeup(!mode)
        console.log(mode)
    }
    

return(
    <AppContext.Provider value={{product,productup,original,originalup,mode,modeup,Mode}}>
        {children}
    </AppContext.Provider>
)
}
export {AppProvider,AppContext}
export const useGlobalContext =()=>{return useContext(AppContext)}