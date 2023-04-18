import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  CustomerContext,
  iCustomerContext,
} from "../../context/CustomerContext";
import { ContactContext, iContactContext } from "../../context/ContactContext";

import AddModal from "../../components/Modal/AddModal";
import EditModal from "../../components/Modal/EditModal";
import DeleteModal from "../../components/Modal/DeleteModal";

import { ContainerDashboard, StyledContacts, StyledNav } from "./styles";
import Infinity from "../../services/Infinity1.png";

const Dashboard = () => {
  const { customer, setCustomer } =
    useContext<iCustomerContext>(CustomerContext);

  const {
    addContactModal,
    setAddContactModal,
    contacts,
    updateContactModal,
    setUpdateContactModal,
    deleteContactModal,
    setDeleteContactModal,
    setContactId
  } = useContext<iContactContext>(ContactContext);

  console.log("antes do update", contacts)
  
  const navigate = useNavigate();
  
  function logout() {
    setCustomer(null);
    localStorage.removeItem("@INFINITY-TOKEN");
    localStorage.removeItem("@INFINITY-CUSTOMER");
    navigate("/", { replace: true });
  }
  

  function toEditModal(id:string){
    setUpdateContactModal(!updateContactModal)
    setContactId(id)
  }  
  
  function toDeleteModal(id:string){
    setDeleteContactModal(!deleteContactModal)
    setContactId(id)
  }  

  return (
    <ContainerDashboard>
      <StyledNav>
        <img src={Infinity} alt="Infinity symbol in gold" />
        <button type="button" onClick={() => logout()}>
          Logout
        </button>
      </StyledNav>

      <header>
        <p>Hello, {customer?.customer_name}</p>
        <span>{customer?.email}</span>
      </header>

      <StyledContacts>
        <div>
          <h2>Contacts</h2>
          <button
            type="button"
            onClick={() => setAddContactModal(!addContactModal)}
          >
            +
          </button>
        </div>

        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <h2>{contact.id}</h2>
              <h2>{contact.name}</h2>
              <h3>{contact.phone}</h3>
              <h2>{contact.email}</h2>
              <h5>{`Active contact? ${contact.isActive}`}</h5>
              <h5>{`Created at ${contact.createdAt}`}</h5>

              <button
                className="edit-button"
                type="button"
                onClick={() => toEditModal(contact.id)}
              >
                Edit Contact
              </button>
              <button
                className="delete-button"
                type="button"
                onClick={() => toDeleteModal(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </StyledContacts>
      {!!addContactModal && <AddModal />}
      {!!updateContactModal && <EditModal />}
      {!!deleteContactModal && <DeleteModal />}
    </ContainerDashboard>
  );
};
export default Dashboard;
