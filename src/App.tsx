import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Router from "./router"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <>
        <BrowserRouter>
            <Header/>
            <Router/>
            <Sidebar/>
        </BrowserRouter>
    </>
  )
}

export default App