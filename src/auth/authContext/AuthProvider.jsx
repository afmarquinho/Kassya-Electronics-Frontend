import { createContext, useState } from "react";
import clienteAxios from "../../config/clienteAxios";
import useForm from "../../helpers/useForm";


const AuthContext = createContext();
const AuthProvider = ({children}) =>{


 const sendFormToBackend = async() => {
    
    
 };
 
    
return(
    <AuthContext.Provider value={{sendFormToBackend}}>
        {children}
    </AuthContext.Provider> 
)
}
export {AuthProvider};
export default AuthContext;