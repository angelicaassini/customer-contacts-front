import { useContext, useEffect, useState } from "react"
import { CustomerContext, iCustomerContext } from "../../context/CustomerContext"
import Infinity from "../../services/Infinity.png"
import { ContainerDashboard, StyledContacts, StyledNav } from "./styles"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {customer, setCustomer, modalIsOpen, setModalIsOpen, contacts} = 
    useContext<iCustomerContext>(CustomerContext)

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
                <img src="{Infinity}" alt="infinito em dourado" />
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
                    {contacts.map(({id, name, phone, email, isActive, createdAt}) => {
                        <li key={id}>
                            <h2>{name}</h2>
                            <h3>{phone}</h3>
                            <h2>{email}</h2>
                            <h5>{`Contato ativo? ${isActive}`}</h5>
                            <h5>{`Criado em: ${createdAt}`}</h5>
                        </li>
                    })}
                </ul>
            </StyledContacts>
            {modalIsOpen && <AddModal/>}

        </ContainerDashboard>
    )
}
export default Dashboard