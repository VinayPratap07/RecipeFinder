import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import UserContextProvider from './Context/userContextProvider'

function App() {


  return (
    <UserContextProvider>
      <Header/>
      <Outlet/>
      <Footer/>
    </UserContextProvider>
  )
}

export default App
