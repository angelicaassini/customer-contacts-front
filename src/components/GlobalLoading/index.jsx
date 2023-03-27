import { useContext }  from "react"
import { Outlet } from "react-router-dom"
import { CustomerContext } from ""

const GlobalLoading = () => {
    const {globalLoading} = useContext(CustomerContext);

    return globalLoading ? (
        <h5 style = {{color: "white"}}>Carregando...</h5>
    ) : (
        <Outlet/>
    )

}
export default GlobalLoading