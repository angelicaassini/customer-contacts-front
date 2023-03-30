import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useContext, useState } from "react"

import { iContactFormData } from "../components/Modal/AddModal";
import apiBackend from "../services/api";
import { CustomerContext, iCustomerContext } from "./CustomerContext";

export interface iContactResponse {
    id: string,
    name: string,
    phone: string,
    email: string,
    isActive: boolean,
    createdAt: Date
}

export interface iContactProviderProps{
    children: React.ReactNode
}

export interface iContactContext{
    contacts: iContactResponse[];
    setContacts: React.Dispatch<React.SetStateAction<iContactResponse[]>>;
    createContact:(data:iContactFormData) => void;
    // removeContact:;
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

}

export const ContactContext = createContext<iContactContext>({} as iContactContext)

const ContactProvider = ({children}:iContactProviderProps) => {
    const {contacts, setContacts, setGlobalLoading} = useContext<iCustomerContext>(CustomerContext)
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    async function createContact(data:iContactFormData) {
        setGlobalLoading(true)
        try {
           const newContact:iContactResponse = await apiBackend.post("/contacts", data)  
           setContacts((oldContacts) => [...oldContacts, newContact])
           toast.success('🦄 Contact successfully added!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });  
        } 
        catch (error) {
            toast.error('Your contact registration failed!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }); 
        }
        finally {
            setGlobalLoading(false)
        }
    }

    return (
        <ContactContext.Provider 
            value={{
                createContact, 
                modalIsOpen, setModalIsOpen,
                contacts, setContacts
            }}>
            {children}
        </ContactContext.Provider>
    )

}
export default ContactProvider
