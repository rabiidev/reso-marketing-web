import React from 'react';
import "./MobileNav.css";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';


const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)



  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <nav class="mobilenav navbar-light bg-light">
        <div class="mobilenavdiv">
          <img src="/assets/logo-img.webp" alt="" className='logoimg' />

          <div className='d-flex me-3 mb-2 btnsell mt-2'>
            <svg className=' ms-3 plusicon' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="#475569" strokeDasharray={16} strokeDashoffset={16} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M5 12h14"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></animate></path><path d="M12 5v14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></animate></path></g></svg>

            <button classname="me- font-semibold color-#475569 btnsell  " >
              <p className='font-semibold text-[#475569] ps-1 ' >Sell</p>
            </button>
          </div>

          <button className="menu-btn" onClick={toggleSidebar}>
            {isOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>

            }
          </button>

          {/* <button onClick={toggleMenu} className='menu-btn'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>

          </button> */}

          {/* <button class="menu-btn" onClick={toggleMenu}>
          <span
          class={"material-symbols-outlined"}
          style={{ fontSize: "1.8rem"}}>
            {openMenu ? 
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>
        :            
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="black" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"></path></svg>
}
        
           

</span> 
        </button> */}

        </div>
      </nav>



      {/* <div className={`opendiv bg-red-2px ${isOpen ?
        "h-[20px]" :
        "w-[0]"
        }`}

      >
        <p>vgvjb</p>
        <div className='opendiv'>
          <p>ghghkgmh</p>
        </div> */}


        {/* <div>       
<Menu>
<MenuButton classname='pe-3 ' onClick={handleFirstMenuClick}>
  <span className='d-flex'>  
   <p>Electronics</p> 
</span>
</MenuButton>
<MenuItems as="div" className='tabitemsf'  
style={{ width: '300px', height: 'px', marginTop: '10px ', marginLeft: '40px' }} anchor="bottom" >
<MenuItem>
  <a className="block data-[focus]:bg-gray-100" href="/settings">
    Smartphones
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/settings">
    Laptops
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/support">
    Printers
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Cameras
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Audio Devices
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Wearables Technology
  </a>
</MenuItem>

</MenuItems>
</Menu>
</div>

<div 
style={{ marginTop: isFirstMenuOpen ? '220px' : '10px', transition: 'all 0.3s ease' }}>
<Menu>
<MenuButton classname='pe-4'
//  onClick={handleSecondMenuClick}
 >
  <span className='d-flex'>  
   <p>Electronics</p> 
</span>
</MenuButton>
<MenuItems anchor="bottom"
>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/settings">
    Smartphones
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/settings">
    Laptops
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/support">
    Printers
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Cameras
  </a>
</MenuItem> 
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Audio Devices
  </a>
</MenuItem>
<MenuItem>
  <a className="block data-[focus]:bg-blue-100" href="/license">
    Wearables Technology
  </a>
</MenuItem>

</MenuItems>
</Menu>
</div> */}
      {/* </div> */}



    </>
  )
}

export default MobileNav;