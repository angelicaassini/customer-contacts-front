import { useState, useEffect } from "react";
import { createContext } from "vm";
import { useNavigate, useLocation } from "react-router-dom"

export interface iCustomerProviderProps{

}

export interface iCustomer{

}

export interface iContact{

}

export interface iCustomerContext{

}

export const CustomerContext = createContext<iCustomerContext>({} as iCustomerContext)

const CustomerProvider = ({children}) => {
    const [customer, setCustomer] = useState(null)
    const [contacts, setContacts] = useState([])
    const [globalLoading, setGlobalLoading] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    async function registerCustomer(data){
        try {
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        async function loadCustomer(){

        }
        loadCustomer()
    }, [])
    
    async function loginCustomer(data){
        try {
            
        } catch (error) {
            
        } finally{

        }
    }

    return (
        <CustomerContext.Provider 
          value={{
            registerCustomer, loginCustomer, 
            customer, setCustomer, 
            contacts, setContacts,
            globalLoading, setGlobalLoading
          }}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerProvider