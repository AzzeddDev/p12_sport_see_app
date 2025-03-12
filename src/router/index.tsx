import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"
import Dashboard from "../pages/dashboard"
import Home from "../pages/home"

const Router = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.dashboard()} element={<Dashboard />} />
        </Routes>
    )
}

export default Router