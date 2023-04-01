import * as yup from "yup"
import { useContext } from "react";
import { CustomerContext, iCustomerContext } from "../../context/CustomerContext";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, StyledLoginForm } from "./styles";
import { LinkStyled as Link } from "./styles";

export interface iLoginFormData{
  email: string;
  password: string;
}

const schemaLogin = yup.object({
  email: yup.string().required("Email is required."),
  password: yup.string().required("Password is required.")
})

const Login = () => {
  const { loginCustomer } = useContext<iCustomerContext>(CustomerContext)

  const {register, handleSubmit, formState: { errors }} = 
  useForm<iLoginFormData>({resolver: yupResolver(schemaLogin)})

    return (
        <>
          <Container>
            <StyledLoginForm onSubmit={handleSubmit(loginCustomer)}>
              <title>Login</title>
              <label htmlFor="email">Email</label>
              <input 
                id="email" 
                type="email"
                placeholder="Type your email"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Type your password"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
              
              <button type="submit">Send</button>

              <span>Not have an account yet?</span>
              
              <Link to={"/register"}>Sign up</Link>
            </StyledLoginForm>
          </Container>
        </>
    )
}
export default Login

