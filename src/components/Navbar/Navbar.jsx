import React from 'react';
import './Navbar.css'
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import MobileNav from './MobileNav/MobileNav';
import Sidebar from './MobileNav/Sidebar/Sidebar';

const cities = [
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Electronics', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];



const Navbar = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const [isOpen, setIsOpen] = useState(false)



    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };


  return (
   
  
  
  
  
    
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    
      {/* <MobileNav /> */}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid nav">
          <img src="/assets/logo-img.webp" alt="" className='logoimg' />

          <div className='searchplustab'>
            <div className='d-flex formdiv '>
              <div className="card flex justify-content-center  ps-3">
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                  placeholder="Select category" className="w-14rem md:w-14rem me-4 selectdropdown" />
              </div>

              <form class="form d-flex formsearch h-12">
                <input class="searcht border-[#0f172a] p-2 text-[#0f172a] " type="search" placeholder="Search" aria-label="Search" />
                <button class="btnsearch" type="submit">
                  <svg className='w-7 h-6 searchi ' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
                </button>
              </form>
              </div>
              </div>

              <div className='lgindiv' >
              <Menu as="div" className="tablogin">
                <MenuButton as='div' className='pe-2 logindown'>
                  <span className='d-flex'>
                    <p className='font-semibold'>Login</p>
                    <svg className='ms-2 mt-1 loginright' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="black" d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"></path></svg>
                  </span>
                </MenuButton>
                <MenuItems anchor="bottom">
                  <div className='loginitems'>
                    <MenuItem>
                      <a className="block data-[focus]:bg-blue-100" href="/settings">
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a className="block data-[focus]:bg-blue-100" href="/support">
                        Support
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a className="block data-[focus]:bg-blue-100" href="/license">
                        License
                      </a>
                    </MenuItem>

                  </div>
                </MenuItems>
              </Menu>
              </div>

              
              <div className='d-flex me-3 mb-2 btnsell mt-2'>
                <svg className=' ms-3 plusicon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#475569" strokeDasharray={16} strokeDashoffset={16} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></animate></path><path d="M12 5v14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></animate></path></g></svg>

                <button classname="me- font-semibold color-#475569 btnsell  " >
                  <p className='font-semibold text-[#475569] ps-1 ' >Sell</p>
                </button>
              </div>
                 
                 <div className='navicondiv'>
                 <div className='d-flex '>
              <div className='d-flex me-2' >
                <img src="/assets/nav-hearticon.webp" className='w-4 h-4   ms-1 whistimg' alt="" />
                <button class=" text-black mb-1  btnwhist  " type="Price Plan">
                  Wishlist</button>

              </div>
              <button className=' comparediv'>
                <img src="/assets/nav-compareicon.webp" className='w-5 h-5 mb-3 ms-2 compareiconimg' alt="" />
              </button>
              </div>
              </div>
            
              <button className="menu-btn" onClick={toggleSidebar}>
            {isOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>

            }
          </button>


        </div>
      </nav>

    </>

  )
};

export default Navbar;
