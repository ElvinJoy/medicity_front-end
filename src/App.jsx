import { Route, Routes } from "react-router-dom";
import Home from './components/homePage/home'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Signup from './components/signup/signup'
import LoginForm from './components/loginForm/loginForm';
import Location from './components/location/location';
import BookingPage from "./components/bookingPage/bookingPage"
import AboutUs from "./components/aboutus/aboutus";
import DoctorLoginForm from './components/doctor_login/doctor_login'
import DoctorRegistration from "./components/addDoctors/addDoctors";
import AdminLogin from "./components/adminLogin/adminLogin";
import AdminWelcome from './components/adminPanel/adminPanel'

function App() {
  return (
    <>

      {/*  <Navbar/>  */}



      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/appointment" element={<BookingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/DoctorLoginForm" element={<DoctorLoginForm />} />
        <Route path="/DoctorRegistration" element={<DoctorRegistration/>} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/adminPanel" element={<AdminWelcome />} />

      </Routes>
      <Footer />

     {/* <DoctorRegistration /> */}
     {/* <AdminWelcome /> */}

    </>
  );
}

export default App;


