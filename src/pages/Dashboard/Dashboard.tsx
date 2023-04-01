import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { CustomerContext, iCustomerContext } from "../../context/CustomerContext"
import { ContactContext, iContactContext } from "../../context/ContactContext";
import AddModal from "../../components/Modal/AddModal";

import { ContainerDashboard, StyledContacts, StyledNav } from "./styles"
import Infinity from "../../services/Infinity.png"

const Dashboard = () => {
    const {customer, setCustomer} = 
    useContext<iCustomerContext>(CustomerContext)

    const {modalIsOpen, setModalIsOpen, contacts, editContact, removeContact} = 
    useContext<iContactContext>(ContactContext)

    const navigate = useNavigate()

    useEffect(() => {

    }, [contacts])

    function logout() {
        setCustomer(null)
        localStorage.removeItem('@INFINITY-TOKEN')
        localStorage.removeItem('@INFINITY-CUSTOMER')
        navigate("/login", {replace:true})
    }

    return (
        <ContainerDashboard>

            <StyledNav>
                <img src={Infinity} alt="Infinity symbol in gold"/>
                <button type="button" onClick={() => logout()}>Sair</button>
            </StyledNav>

            <header>
                <p>HELLO</p>
                {/* <p>Hello, {customer?.customer_name}</p>
                <span>{customer?.email}</span> */}
            </header>

            <StyledContacts>
                <div>
                    <h2>Contacts</h2>
                    <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>+</button>
                </div>

                <ul>
                    {contacts.map((contact) => 
                        <li key={contact.id}>
                            <h2>{contact.name}</h2>
                            <h3>{contact.phone}</h3>
                            <h2>{contact.email}</h2>
                            <h5>{`Contato ativo? ${contact.isActive}`}</h5>
                            <h5>{`Criado em ${contact.createdAt}`}</h5>
                            <button className="edit-button" type="button" onClick={() => editContact(contact, contact.id)}>Edit Contact</button>
                            <button className="delete-button" type="button" onClick={() => removeContact(contact.id)}>Delete</button>
                        </li>
                    )}
                </ul>
            </StyledContacts>
            {modalIsOpen && <AddModal/>}

        </ContainerDashboard>
    )
}
export default Dashboard