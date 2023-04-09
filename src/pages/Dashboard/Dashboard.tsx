import { useContext } from "react"
import { useNavigate } from "react-router-dom";

import { CustomerContext, iContactResponse, iCustomerContext } from "../../context/CustomerContext"
import { ContactContext, iContactContext } from "../../context/ContactContext";

import AddModal from "../../components/Modal/AddModal";
import EditModal from "../../components/Modal/EditModal";
import DeleteModal from "../../components/Modal/DeleteModal";

import { ContainerDashboard, StyledContacts, StyledNav } from "./styles"
import Infinity from "../../services/Infinity1.png"

const Dashboard = () => {
    const {customer, setCustomer} = 
    useContext<iCustomerContext>(CustomerContext)

    const {modalIsOpen, setModalIsOpen, contacts, 
        updateContactModal, setUpdateContactModal, deleteContactModal, setDeleteContactModal} = 
    useContext<iContactContext>(ContactContext)

    const navigate = useNavigate()
 
    function logout() {
        setCustomer(null)
        localStorage.removeItem('@INFINITY-TOKEN')
        localStorage.removeItem('@INFINITY-CUSTOMER')
        navigate("/", {replace:true})
    }

    return (
        <ContainerDashboard>

            <StyledNav>
                <img src={Infinity} alt="Infinity symbol in gold"/>
                <button type="button" onClick={() => logout()}>Logout</button>
            </StyledNav>

            <header>
                <p>Hello, {customer?.customer_name}</p>
                <span>{customer?.email}</span>
            </header>

            <StyledContacts>
                <div>
                    <h2>Contacts</h2>
                    <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>+</button>
                </div>

                <ul>
                    {contacts.map(({id, name, phone, email, isActive, createdAt}) => 
                        <li key={id}>
                            <h2>{id}</h2>
                            <h2>{name}</h2>
                            <h3>{phone}</h3>
                            <h2>{email}</h2>
                            <h5>{`Contato ativo? ${isActive}`}</h5>
                            <h5>{`Criado em ${createdAt}`}</h5>

                            <button className="edit-button" type="button" onClick={() => setUpdateContactModal(!updateContactModal)}>Edit Contact</button>
                            <button className="delete-button" type="button" onClick={() => setDeleteContactModal(!deleteContactModal)}>Delete</button>
                        </li>
                    )}
                </ul>
            </StyledContacts>
            {!!modalIsOpen && <AddModal/>}
            {!!updateContactModal && <EditModal/>}
            {!!deleteContactModal && <DeleteModal/>}

        </ContainerDashboard>
    )
}
export default Dashboard