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

export interface iCustomerResponse{
  id: string,
  customer_name: string,
  CNPJ: number,
  email: string,
  isActive: boolean,
  contacts: iContactResponse[]
}

export interface iContactResponse{
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
  customer: iCustomerResponse|null,
  setCustomer: React.Dispatch<React.SetStateAction<iCustomerResponse|null>>,
  contacts: iContactResponse[],
  setContacts: React.Dispatch<React.SetStateAction<iContactResponse[]>>,
  globalLoading: boolean,
  setGlobalLoading: React.Dispatch<React.SetStateAction<boolean>>,
  removeEmptyProperties:(obj: object) => {[k:string]:any}
}

export const CustomerContext = createContext<iCustomerContext>({} as iCustomerContext);

const CustomerProvider = ({children}:iCustomerProviderProps) => {
    const [customer, setCustomer] = useState<iCustomerResponse|null>(null)
    const [contacts, setContacts] = useState<iContactResponse[]>([])
    const [globalLoading, setGlobalLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const location = useLocation()

    function removeEmptyProperties(obj: object){
      return Object.fromEntries(Object.entries(obj).filter(([_,v]) => v != ""))
    }

    async function registerCustomer(data:iRegisterFormData){
      
        setGlobalLoading(true)
        try {
          const response:iCustomerResponse = await apiBackend.post("/customers", data)
      
          navigate("/")
          toast.success('🦄 Registration successfully completed!', {
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
        catch (error) {
          
            toast.error('Your registration failed!', {
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
        finally {
          setGlobalLoading(false)
        }
    }

    useEffect(() => {
        async function loadCustomer(){
          const token = localStorage.getItem('@INFINITY-TOKEN');
          const customerId = localStorage.getItem('@INFINITY-CUSTOMER');

          if (token){
            try{
              apiBackend.defaults.headers.authorization = `Bearer ${token}`
              const { data } = await apiBackend.get(`/customers/${customerId}`) 

              const toNavigate = location.state?.from?.pathname || "/dashboard"
              navigate(toNavigate, {replace:true})
            } 
            catch (error) {
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
            finally {
              setGlobalLoading(false)
            }
          }
      }
      loadCustomer()
    }, [])
    
    
    async function loginCustomer(data: iLoginFormData){
        setGlobalLoading(true);
        try {
          const response = await apiBackend.post("/", data);
          const { token, customerId, findCustomer } = response.data;

          apiBackend.defaults.headers.authorization = `Bearer ${token}`;
          setCustomer(findCustomer);

          localStorage.setItem("@INFINITY-TOKEN", token);
          localStorage.setItem("@INFINITY-CUSTOMER", customerId);

          const toNavigate = location.state?.from?.pathname || "/dashboard";
          navigate(toNavigate, { replace: true });
          toast.success("Login realized with success!", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })     
        } 
        catch (error) {
            toast.error("Ops! Something is wrong, try again", {
              position: "top-right",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
        } 
        finally {
            setGlobalLoading(false)
        }
    }

    return (
        <CustomerContext.Provider 
          value={{
            registerCustomer, loginCustomer, 
            customer, setCustomer, 
            contacts, setContacts,
            globalLoading, setGlobalLoading, removeEmptyProperties
          }}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerProvider