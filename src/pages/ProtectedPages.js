import { Navigate, Outlet } from "react-router-dom"

const ProtectedPages = ({userName}) => {
    if(userName){
        return <Outlet/>
    } else {
        return <Navigate to='/' />
    }
}

export default ProtectedPages