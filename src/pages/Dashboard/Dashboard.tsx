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

    const {modalIsOpen, setModalIsOpen, contacts} = 
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
                <p>Olá, {customer?.customer_name}</p>
                <span>{customer?.email}</span>
            </header>

            <StyledContacts>
                <div>
                    <h2>Contatos</h2>
                    <button type="button" onClick={() => setModalIsOpen(!modalIsOpen)}>+</button>
                </div>

                <ul>
                    {contacts.map(({id, name, phone, email, isActive, createdAt}) => 
                        <li key={id}>
                            <h2>{name}</h2>
                            <h3>{phone}</h3>
                            <h2>{email}</h2>
                            <h5>{`Contato ativo? ${isActive}`}</h5>
                            <h5>{`Criado em: ${createdAt}`}</h5>
                        </li>
                    )}
                </ul>
            </StyledContacts>
            {modalIsOpen && <AddModal/>}

        </ContainerDashboard>
    )
}
export default Dashboard