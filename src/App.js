import './App.css';
// import TopNav from './components/Navbar/TopNav';
// import Navbar from './components/Navbar/Navbar';
// import HeroSection from './components/HeroSection/HeroSection';
import Header from './components/Header/Header';
// import { MyContextProvider } from './MyContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import SignUp from './components/Header/SignUp';
import Login from './components/Header/Login';
import Otp from './components/Header/Otp';
import Dashboard from './components/Header/Dashboard';





function App() {
  
    useEffect(() => {
    Aos.init();

    },[])

  return (
    <>
    <main className='bg-[#000]  '>

      <BrowserRouter>
        <Routes>
         <Route index element={<Header />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/otp" element={<Otp />} />
         <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
         
        {/* <TopNav/>
       <Navbar/>
       <HeroSection/> */}
        {/* <MyContextProvider> */}
        {/* <MyContext.Provider value={myValue}> */}
        
        {/* </MyContext.Provider> */}

        {/* </MyContextProvider> */}

      </BrowserRouter>
      </main>

    </>
  );
}

export default App;
