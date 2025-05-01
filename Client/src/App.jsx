
import { Outlet } from "react-router-dom"
import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
function App() {
  

  return (
    <>

     <Header/>
     <Outlet/>
     <Footer/>
   
    </>
  )
}

export default App
