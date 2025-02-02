import React from 'react';
import './TopNav.css'

const TopNav = () => {
  return (
    <>
    <div className='topnav '>
    <div className='d-flex h-8 container-fluid' >
    <div class="nav-topt text-white ">
    <p class=" nav-toptp text-white pt-1 ">WELCOME TO VIIDEO E-COMMERCE PLATFORM
    </p>
    </div>
    

    <div className='topnavicondiv  '>
    <div class="d-flex  mb-1 ">
      
      <div className='white-circle me-2 mb-2'></div>
    <button class=" btntobnav1 text-white mt- me-3 " type="Price Plan">
      Pricing Plan</button>
      
    
   
    <div className='white-circle ms-2 mb-2'></div>
    <button class="text-white mt- ps-2 " type="">Help Center</button>
    
    
    </div>
    </div>

  </div>
  </div>
    
    </>
  )
}

export default TopNav;
