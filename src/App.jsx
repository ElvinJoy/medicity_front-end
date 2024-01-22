import { Route, Routes } from "react-router-dom";
import Home from './components/homePage/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Signup from './components/signup/signup'
import LoginForm from './components/loginForm/loginForm';
import Location from './components/location/location';
import BookingPage from "./components/bookingPage/bookingPage"
import AboutUs from "./components/aboutus/aboutus";
import Video from "./video";


function App() {
  return (
    <>

      {/* <Navbar/>
      <Home/>
      <AboutUs/>
      <Signup/>
      <LoginForm/>
      <Location/>
      <BookingPage/> 
      <Footer/> */}
      {/* <Video /> */}
      

      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/appointment" element={<BookingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginForm" element={<LoginForm />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;


