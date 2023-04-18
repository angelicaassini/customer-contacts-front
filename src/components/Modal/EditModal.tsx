import { yupResolver } from "@hookform/resolvers/yup";
import { useContext} from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ContactContext } from "../../context/ContactContext";
import { Modal } from "./styles";

export interface iContactUpdateFormData{
    name?: string,
    phone?: string,
    email?: string;
}

const contactUpdateRequestSchema = yup.object({
  name: yup.string().notRequired(),
  phone: yup.string().notRequired(),
  email: yup.string().notRequired(),
})

const EditModal = () => {
    const {updateContact, editContactObj, setUpdateContactModal, setContactId} = useContext(ContactContext)

    const {register, handleSubmit, formState: {errors}} =
    useForm<iContactUpdateFormData>({resolver: yupResolver(contactUpdateRequestSchema)})

    function closeEditModal(){
        setUpdateContactModal(false)
        setContactId(null)
    }

    return (
        <Modal>
            <form onSubmit={handleSubmit(updateContact)}>
                <div className="h1-button">
                    <h1>Edit Contact</h1>

                    <button type="button" onClick={() => closeEditModal()}>X</button>
                </div>

                <div className="div-inputs">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Type the name of your contact"
                    defaultValue={editContactObj?.name}
                    {...register("name")}/>
                    <p>{errors.name?.message}</p>

                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="text" placeholder="Type the phone of your contact" 
                    defaultValue={editContactObj?.phone}
                    {...register("phone")}/>
                    <p>{errors.phone?.message}</p>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Type the email of your contact" 
                    defaultValue={editContactObj?.email}
                    {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </div>

                <button className="internal-edit-button" type="submit">Edit Contact</button>
            </form>
        </Modal>
    )
}
export default EditModal