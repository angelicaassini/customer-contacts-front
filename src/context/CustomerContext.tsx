import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createContext , useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import apiBackend from "../services/api";

import { AxiosError } from "axios";
import { iRegisterFormData } from "../pages/Register/Register";
import { iLoginFormData } from "../pages/Login/Login";

export interface iCustomerProviderProps{
  children: React.ReactNode
}

export interface iCustomer{
  id: string,
  customer_name: string,
  CNPJ: number,
  email: string,
  isActive: boolean,
  contacts: iContact[]
}

export interface iContact{
  id: string,
  name: string,
  phone: string,
  email: string,
  isActive: boolean,
  createdAt: Date
}

export interface iCustomerContext{
  registerCustomer: (data: iRegisterFormData) => void,
  loginCustomer: (data: iLoginFormData) => void,
  customer: iCustomer|null,
  setCustomer: React.Dispatch<React.SetStateAction<iCustomer|null>>,
  contacts: iContact[],
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>,
  globalLoading: boolean,
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CustomerContext = createContext<iCustomerContext>({} as iCustomerContext);

const CustomerProvider = ({children}:iCustomerProviderProps) => {
    const [customer, setCustomer] = useState<iCustomer|null>(null)
    const [contacts, setContacts] = useState<iContact[]>([])
    const [globalLoading, setGlobalLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const location = useLocation()

    async function registerCustomer(data:iRegisterFormData){
        try {
          await apiBackend.post("/customers", data)
          navigate("/login")
          toast.success('🦄 Cadastro realizado com sucesso!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });  
            
        } catch (error) {
            toast.error('VIXI! Seu cadastro deu errado!', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });         
        }
    }

    useEffect(() => {
        async function loadCustomer(){
          const token = localStorage.getItem('@INFINITY-TOKEN');

          if (token){
            setGlobalLoading(true);
            try{
              apiBackend.defaults.headers.authorization = `Bearer ${token}`
              const { data } = await apiBackend.get("/customers")
              setCustomer(data)
              setContacts(data.contacts)

              const toNavigate = location.state?.from?.pathname || "/dashboard"
              navigate(toNavigate, {replace:true})
            } catch (error) {
                localStorage.removeItem('@INFINITY-TOKEN')
                localStorage.removeItem('@INFINITY-CUSTOMER')
                const requestError = error as AxiosError<any>
                toast.error(requestError.response?.data.message, {
                  position: "top-right",
                  autoClose: 3500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                })
            }
            finally{
              setGlobalLoading(false)
            }
          }
        loadCustomer()
    }, [])
    
    async function loginCustomer(data: iLoginFormData){
        setGlobalLoading(true);
        try {
          const response = await apiBackend.post("/login", data);

          const { customer: customerResponse, token } = response.data;
          apiBackend.defaults.headers.authorization = `Bearer ${token}`;
          setCustomer(customerResponse);
          setContacts(customerResponse.contacts);

          localStorage.setItem("@KENZIEHUB-TOKEN", token);
          localStorage.setItem("@KENZIEHUB-USERID", userResponse.id);

          const toNavigate = location.state?.from?.pathname || "/dashboard";
          navigate(toNavigate, { replace: true });
          toast.success("Login realizado com sucesso!", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })     
        } catch (error) {
            toast.error("Ops! Algo deu errado, tente novamente", {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
        } finally{
            setGlobalLoading(false)
        }
    }

    return (
        <CustomerContext.Provider 
          value={{
            registerCustomer, loginCustomer, 
            customer, setCustomer, 
            contacts, setContacts,
            globalLoading, setGlobalLoading
          }}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerProvider