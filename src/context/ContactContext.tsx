import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext, useContext, useState } from "react";

import { iContactFormData } from "../components/Modal/AddModal";
import apiBackend from "../services/api";
import { CustomerContext, iCustomerContext } from "./CustomerContext";
import { iContactUpdateFormData } from "../components/Modal/EditModal";

export interface iContactResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
}

export interface iContactProviderProps {
  children: React.ReactNode;
}

export interface iContactContext {
  contacts: iContactResponse[];
  setContacts: React.Dispatch<React.SetStateAction<iContactResponse[]>>;

  createContact: (data: iContactFormData) => Promise<void>;
  updateContact: (data: iContactUpdateFormData) => Promise<void>;
  removeContact: () => Promise<void>;

  addContactModal: boolean;
  setAddContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateContactModal: boolean;
  setUpdateContactModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContactModal: boolean;
  setDeleteContactModal: React.Dispatch<React.SetStateAction<boolean>>;

  editContactObj: iContactResponse | null;
  setEditContactObj: React.Dispatch<React.SetStateAction<iContactResponse | null>>;

  contactId: string |null;
  setContactId: React.Dispatch<React.SetStateAction<string | null>>;
}



export const ContactContext = createContext<iContactContext>(
  {} as iContactContext
);

const ContactProvider = ({ children }: iContactProviderProps) => {
  const { contacts, setContacts, setGlobalLoading, removeEmptyProperties } =
    useContext<iCustomerContext>(CustomerContext);

  const [addContactModal, setAddContactModal] = useState<boolean>(false);
  const [updateContactModal, setUpdateContactModal] = useState<boolean>(false);
  const [deleteContactModal, setDeleteContactModal] = useState<boolean>(false);

  const [editContactObj, setEditContactObj] = useState<iContactResponse | null>(
    null
  );

  const [contactId, setContactId] = useState<string|null>(null)

  const token = localStorage.getItem("@INFINITY-TOKEN");

  async function createContact(dataRequest: iContactFormData) {
    setGlobalLoading(true);
    try {
      const {data} = await apiBackend.post("/contacts", dataRequest);
      setContacts((oldContacts) => [...oldContacts, data]);
      toast.success("🦄 Contact successfully added!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Your contact registration failed!", {
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
    setGlobalLoading(false);
  }

  async function getReloadContacts() {
    apiBackend.defaults.headers.authorization = `Bearer ${token}`;
    const allContacts = await apiBackend.get("/contacts");
    
    setContacts(allContacts.data);
  }

  async function updateContact(dataRequest: iContactUpdateFormData) {
    setGlobalLoading(true);

    const dataRequestWithout = removeEmptyProperties(dataRequest)    
 
      try {
      const {data} = await apiBackend.patch(`/contacts/${contactId}`, dataRequestWithout);
      // setContacts((oldContacts) => [...oldContacts, data]);
      toast.success("🦄 Contact successfully updated!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getReloadContacts();
      setUpdateContactModal(false);
    } catch (error) {
      toast.error("Your contact registration failed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(error);
    }
    setGlobalLoading(false);
    setContactId(null)
    // }
  }

  async function removeContact() {
    setGlobalLoading(true);
    const token = localStorage.getItem("@INFINITY-TOKEN");
    if (token) {
      try {
        await apiBackend.delete(`/contacts/${contactId}`);
        const newContacts: iContactResponse[] = contacts.filter(
          (contact) => contact.id !== contactId
        );
        setContacts(newContacts);
        toast.success("🦄 Contact successfully removed.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setDeleteContactModal(false);
        getReloadContacts();
      } catch (error) {
        toast.error("Your contact was not removed.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error(error);
      }
      setGlobalLoading(false);
    }
  }
  return (
    <ContactContext.Provider
      value={{
        createContact,
        updateContact,
        removeContact,
        addContactModal,
        setAddContactModal,
        updateContactModal,
        setUpdateContactModal,
        deleteContactModal,
        setDeleteContactModal,
        contacts,
        setContacts,
        editContactObj,
        setEditContactObj,
        contactId,
        setContactId,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
export default ContactProvider;
