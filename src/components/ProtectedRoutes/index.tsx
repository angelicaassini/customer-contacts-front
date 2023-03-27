import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import GlobalLoading from "../GlobalLoading";

const ProtectedRoutes = () => {
    const {customer, globalLoading} = useContext(CustomerContext)
    const location = useLocation()

    if(globalLoading){
        return <GlobalLoading></GlobalLoading>
    }

    return (
        <>
            {customer ? (
                <Outlet/>
            ) : (
                <Navigate to = "/login" replace state = {{from: location}}/>
            )
        }
        </>
    )

}
export default ProtectedRoutes