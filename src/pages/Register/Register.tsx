import * as yup from "yup"
import {yupResolver} from "@hookform/resolver/yup"

const customerRequestSchema = yup.object({
    customer_name: yup.string().required("Name is required."),
    CNPJ: yup.number().required("CNPJ is required."),
    email: yup.string().required("Email is required."),
    password: yup.string()
        .matches(/[A-Z]/, "Must contains a capital letter")
        .matches(/[a-z]/, "Must contains a lower case.")
        .matches(/\d/, "Must contains one number.")
        .matches(/[\W|_]/, "Must contains a special character.")
        .matches(/.{8,}/, "Must contains at least 8 characters")
        .required("Password is required."),
    contacts: contactRequestSchema,

})

const contactRequestSchema, = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().required(),
})

const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver
    })
}
export default Register