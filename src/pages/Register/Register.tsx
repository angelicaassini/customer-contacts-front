import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { CustomerContext, iCustomerContext } from "../../context/CustomerContext";
import { Container, StyledRegisterForm } from "./styles";

export interface iRegisterFormData{
  customer_name: string,
  CNPJ: number,
  email: string;
  password: string;
}

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
})


const Register = () => {
  const {register, handleSubmit, formState:{errors}} = 
  useForm<iRegisterFormData>({resolver: yupResolver(customerRequestSchema)})

  const {registerCustomer} = useContext<iCustomerContext>(CustomerContext)

    return(
      <>
      <Container>
        <StyledRegisterForm onSubmit={handleSubmit(registerCustomer)}>
          <div>
            <h1>Cadastre-se</h1>
            <h3>Desfrute da facilidade de ter seus contatos sempre à mão</h3>
          </div>

          <label htmlFor="customer_name">Nome</label>
          <input id="customer_name" type="text" placeholder="Type the name of your company" 
          {...register("customer_name")}/>
          <p>{errors.customer_name?.message}</p>

          <label htmlFor="CNPJ">CNPJ</label>
          <input id="CNPJ" type="number" placeholder="Type the CNPJ of your company"
          {...register("CNPJ")} />
          <p>{errors.CNPJ?.message}</p>

          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="Digite o email priincipal de cadastro."
          {...register("email")}/>
          <p>{errors.email?.message}</p>

          <label htmlFor="password">Senha</label>
          <input id="password" type="text" placeholder="Digite sua senha de acesso."
          {...register("password")}/>
          <p>{errors.password?.message}</p>

        </StyledRegisterForm>

      </Container>
      </>
    )

}
export default Register