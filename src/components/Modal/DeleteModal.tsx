import { useContext, useEffect } from "react";
import { ContactContext } from "../../context/ContactContext";
import { Modal } from "./styles";


const DeleteModal = () => {
    const {removeContact, setDeleteContactModal} = useContext(ContactContext)

    function delContact(){
        removeContact();
    }
    

    return (
        <Modal>
            <>
            
                <div className="h2-h3-button">
                    <h2>Do you really want delete this contact?</h2>
                    <h3>This action must not be undone!</h3>
                    <button className="cancel-button" type="button" onClick={() => setDeleteContactModal(false)}>Cancel</button>
                </div>
              

                <button className="delete-button" type="button" onClick={() => delContact()}>Confirm Delete</button>
            </>
            
        </Modal>
    )
}
export default DeleteModal