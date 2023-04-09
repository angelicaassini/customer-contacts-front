import { Route, Routes} from "react-router-dom"
import GlobalLoading from "../components/GlobalLoading"
import ProtectedRoutes from "../components/ProtectedRoutes"
import Dashboard from "../pages/Dashboard/Dashboard"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

const RoutesMain = () => {
    return(
        <Routes>
            <Route element={<GlobalLoading/>}>
                <Route path="/register" element={<Register/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route element={<ProtectedRoutes/>}>
                </Route>
            </Route>
        </Routes>
    )

}
export default RoutesMain