import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { ContactContext } from "../../context/ContactContext";
import { Modal } from "./styles";

export interface iContactFormData{
    name: string,
    phone: string,
    email: string;
}

const contactRequestSchema = yup.object({
  name: yup.string().required("Name is required."),
  phone: yup.string().required("Phone is required."),
  email: yup.string().required("Email is required."),
})

const AddModal = () => {
    const {createContact, setModalIsOpen, contacts} = useContext(ContactContext)

    const {register, handleSubmit, formState: {errors}} =
    useForm<iContactFormData>({resolver: yupResolver(contactRequestSchema)})

    useEffect(()=>{

    }, [contacts])

    return (
        <Modal>
            <form onSubmit={handleSubmit((data) => createContact(data))}>
                <div className="h1-button">
                    <h1>Cadastrar Contato</h1>
                    <button type="button" onClick={() => setModalIsOpen(false)}>X</button>
                </div>

                <div className="div-inputs">
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text" placeholder="Type the name of your contact"
                    {...register("name")}/>
                    <p>{errors.name?.message}</p>

                    <label htmlFor="phone"></label>
                    <input id="phone" type="text" placeholder="Type the phone of your contact" 
                    {...register("phone")}/>
                    <p>{errors.phone?.message}</p>

                    <label htmlFor="email"></label>
                    <input id="email" type="text" placeholder="Type the email of your contact" 
                    {...register("email")}/>
                    <p>{errors.email?.message}</p>
                </div>

                <button type="submit">Cadastrar contato</button>
            </form>
        </Modal>
    )
}
export default AddModal