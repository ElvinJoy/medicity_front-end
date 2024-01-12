
import { Route, Routes } from "react-router-dom";
import Home from './components/homePage/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Signup from './components/signup/signup'
import LoginForm from "./components/loginForm/loginForm";
import BookingPage from "./components/bookingPage/bookingPage"
import AboutUs from "./components/aboutus/aboutus";

function App() {
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/BookingForm" element={<BookingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer /> */}

      <Navbar/>
      <Home/>
      <AboutUs/>
      <Signup/>
      <LoginForm/>
      <BookingPage/> 
      <Footer/>

    </>
  );
}

export default App;

  
