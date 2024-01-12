
import { Route, Routes } from "react-router-dom";
import Home from './components/homePage/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Signup from './components/signup/signup'
import LoginForm from "./components/loginForm/loginForm";
import BookingPage from "./components/bookingPage/bookingPage"

function App() {
  return (
    <>
      
        
      {/* <Routes>
        <Route path="/" element={< Signup/>}>
          <Route index element={<Signup />} />
          <Route path="/createnews" element={<CreateNews />}></Route> 
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes> */}

    
    <Navbar/>
    <Home/>
    <Signup/>
    <LoginForm/>
    {/* <Footer/> */}
    <BookingPage/> 


    </>
  )
}

export default App
