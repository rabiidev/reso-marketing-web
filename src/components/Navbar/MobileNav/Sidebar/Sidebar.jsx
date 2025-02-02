// import React from 'react';
// import './Sidebar.css'; // Import the CSS for styling
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
// import { useState } from 'react';




// const Sidebar = ({ isOpen, toggleSidebar }) => {

//   const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);


//   const handleFirstMenuClick = () => {
//     setIsFirstMenuOpen(!isFirstMenuOpen);
//   };
//   return (
//     <>
//       <div className={`sidebaropen ${isOpen ? 'open' : ''}`}
//       >

//         <div>
//         <h3 className='font-semibold text-black mt-3 pb-3 text-center '>
//           All Categories</h3>

//         </div>

//          <div    style={{ marginTop: isFirstMenuOpen ? '0px' : '10px', transition: 'all 0.3s ease' }}>
               
// <Menu>
// <MenuButton className='pe-3' onClick={handleFirstMenuClick}>
//   <span className='d-flex'>  
//    <p>Electronics</p> 
// </span>
// </MenuButton>

// <MenuItems as="div" className='sideitemstab text-black '  
// style={{ width: '30px', height: 'px', marginTop: '10px ', marginLeft: '10px' }} anchor="bottom" >
// <MenuItem>
//   <a className="block data-[focus]:bg-gray-100" href="/settings">
//     Smartphones
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/settings">
//     Laptops
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/support">
//     Printers
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Cameras
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Audio Devices
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Wearables Technology
//   </a>
// </MenuItem>

// </MenuItems>
// </Menu>
// </div>

// <div 
// style={{ marginTop: isFirstMenuOpen ? '220px' : '10px', transition: 'all 0.3s ease' }}>
// <Menu>
// <MenuButton classname='pe-4'
// //  onClick={handleSecondMenuClick}
//  >
//   <span className='d-flex'>  
//    <p>Electronics</p> 
// </span>
// </MenuButton>
// <MenuItems anchor="bottom"
// >
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/settings">
//     Smartphones
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/settings">
//     Laptops
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/support">
//     Printers
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Cameras
//   </a>
// </MenuItem> 
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Audio Devices
//   </a>
// </MenuItem>
// <MenuItem>
//   <a className="block data-[focus]:bg-blue-100" href="/license">
//     Wearables Technology
//   </a>
// </MenuItem>

// </MenuItems>
// </Menu>
// </div> 
//       </div>

//       {/* Backdrop */}
//       {isOpen && <div className="backdrop" onClick={toggleSidebar}>
//       </div>}
//     </>
//   );
// };

// export default Sidebar;

import React from 'react';
import './Sidebar.css'; // Import the CSS for styling
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);

  const handleFirstMenuClick = () => {
    setIsFirstMenuOpen(!isFirstMenuOpen);
  };

  return (
    <>
      <div className={`sidebaropen ${isOpen ? 'open' : ''}`}>

        <div>
          <h3 className='font-semibold text-black mt-3 pb-3 text-center'>
            All Categories
          </h3>
        </div>

        <div style={{ marginTop: isFirstMenuOpen ? '0px' : '10px', transition: 'all 0.3s ease' }}>
          <Menu>
            <MenuButton className='pe-3' onClick={handleFirstMenuClick}>
              <span className='d-flex'>
                <p>Electronics</p>
              </span>
            </MenuButton>
            {isFirstMenuOpen && ( // Only render MenuItems when the menu is open
              <MenuItems as="div" className='sideitemstab text-black' style={{ width: '200px', marginTop: '10px', marginLeft: '10px' }}>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/settings">
                      Smartphones
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/settings">
                      Laptops
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/support">
                      Printers
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/license">
                      Cameras
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/license">
                      Audio Devices
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <a className={`${active ? 'bg-gray-100' : ''} block px-4 py-2`} href="/license">
                      Wearable Technology
                    </a>
                  )}
                </MenuItem>
              </MenuItems>
            )}
          </Menu>
        </div>

      <div 
style={{ marginTop: isFirstMenuOpen ? '10px' : '10px', transition: 'all 0.3s ease' }}>
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
</div> 
      </div>

      {/* Backdrop */}
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;

