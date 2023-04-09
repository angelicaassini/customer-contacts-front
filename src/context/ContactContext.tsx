import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useContext, useState } from "react"

import { iContactFormData } from "../components/Modal/AddModal";
import apiBackend from "../services/api";
import { CustomerContext, iCustomerContext } from "./CustomerContext";
import { iContactUpdateFormData } from "../components/Modal/EditModal";

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

    contactToBeRemoved:string|null;
    // setContactToBeRemoved: React.Dispatch<React.SetStateAction<string|null>>;
    
    createContact:(data:iContactFormData) => void;
    updateContact:(data:iContactUpdateFormData) => Promise<void>;
    removeContact:(contact_id: string | null) => void;
    
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    updateContactModal:boolean;
    setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>; 
    deleteContactModal:boolean;
    setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;

    editContactObj:iContact | null;
    setEditContactObj:React.Dispatch<React.SetStateAction<iContact | null>>;
    
}

interface iContact{
    id: string;
    name?: string;
    phone?: string;
    email?: string;
    isActive?: boolean,
    createdAt?: Date

}

export const ContactContext = createContext<iContactContext>({} as iContactContext)

const ContactProvider = ({children}:iContactProviderProps) => {
    const {contacts, setContacts, setGlobalLoading, removeEmptyProperties} = useContext<iCustomerContext>(CustomerContext)
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [updateContactModal, setUpdateContactModal] = useState<boolean>(false)
    const [deleteContactModal, setDeleteContactModal] = useState<boolean>(false)

    const [contactToBeRemoved, setContactToBeRemoved] = useState<string | null>(null)
    const [editContactObj, setEditContactObj] = useState<iContact | null>(null)

    const token = localStorage.getItem("@INFINITY-TOKEN")

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
        setGlobalLoading(false)
    }

    async function getReloadContacts() {
        apiBackend.defaults.headers.authorization = `Bearer ${token}`
        const  allContacts:iContactResponse[]  = await apiBackend.get("/contacts")
        setContacts(allContacts) 
    }

    async function updateContact(data:iContactUpdateFormData) {
        setGlobalLoading(true)
        const newData = removeEmptyProperties(data)
        try {
            await apiBackend.patch(`/contacts/${editContactObj?.id}`, newData)  
            
            toast.success('🦄 Contact successfully updated!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });  
            setUpdateContactModal(false)
            getReloadContacts()
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
            console.error(error) 
        }
        setGlobalLoading(false)
    }

    async function removeContact() {
        setGlobalLoading(true)
        const token = localStorage.getItem('@INFINITY-TOKEN')
        if(token){
            try {
                await apiBackend.delete(`/contacts/${editContactObj?.id}`)
                const newContacts:iContactResponse[] = contacts.filter((contact) => contact.id !== editContactObj?.id) 
                setContacts(newContacts)
                toast.success('🦄 Contact successfully removed.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setDeleteContactModal(false)
                getReloadContacts()  
            } 
            catch (error) {
                toast.error('Your contact was not removed.', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }); 
                console.error(error) 
            }
            setGlobalLoading(false)
        }
    }
    return (
        <ContactContext.Provider 
            value={{
                createContact, updateContact, removeContact,
                modalIsOpen, setModalIsOpen,
                updateContactModal, setUpdateContactModal,
                deleteContactModal, setDeleteContactModal,
                contacts, setContacts,
                contactToBeRemoved,
                editContactObj, setEditContactObj
            }}>
            {children}
        </ContactContext.Provider>
    )

}
export default ContactProvider
