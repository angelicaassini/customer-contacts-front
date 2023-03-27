import { Route, Routes} from "react-router-dom"
import GlobalLoading from "../components/GlobalLoading"
import ProtectedRoutes from "../components/ProtectedRoutes"

const RoutesMain = () => {
    return(
        <Routes>
            <Route element={<GlobalLoading/>}>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<ProtectedRoutes/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
            </Route>
        </Routes>
    )

}
export default RoutesMain