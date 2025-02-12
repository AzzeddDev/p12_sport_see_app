import UserProfile from "./components/user-profile"
import Header from "./components/header";
import Sidebar from "./components/sidebar";


function App() {

  return (
    <>
        <Header/>
        <main className={"container"}>
            <div>
                <UserProfile userId={12}/>
            </div>
        </main>
        <Sidebar/>
    </>
  )
}

export default App