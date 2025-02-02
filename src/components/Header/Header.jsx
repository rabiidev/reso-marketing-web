import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ProjectSec from './ProjectSec';
import "aos/dist/aos.css";
import Testimonials from './Testimonials';
import AutoScroll from './AutoScroll';
import Footer from '../Footer/Footer'
import { Link } from "react-router-dom";



const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Services', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
     <div className="right-0 lg:flex  
          hidden pt-2 shadow-lg border border-gray-700 border-t-0 border-r-0 border-l-0 border-b-1 pb-2 ">
             
            <div className=' grid grid-col-2 grid-flow-col justify-center items-center ms-[20rem]'>
              <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.2em" viewBox="0 0 16 16"><path fill="#119d60" fillRule="evenodd" d="M5 1.5h6a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V2a.5.5 0 0 1 .5-.5M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm5 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clipRule="evenodd"></path></svg>            
             </div>

            <div className='' >
            <button
              type="button"
              className=" relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
                          <a className='text-white '>+1 (874) 346 7972 </a>
              <span className="absolute -inset-1.5" >
              <p className="sr-only">View notifications</p>

            </span>
            </button>
            </div>

            </div>
            
           

              <div className='grid grid-col-3 grid-flow-col gap-1  ms-[36rem]'>
                <div className='border border-[#119d60] w-9 h-9 rounded-full hover:bg-[#119d60] hover:color-white' >
                <svg className='my-1.5 mx-1.5 fill-[#119d60] hover:fill-white ' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" ><path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z"></path></svg>
                </div>
                <div className='border border-[#119d60] w-9 h-9 rounded-full hover:bg-[#119d60] ' >
                <svg className='my-1.5 mx- hover:stroke-white  stroke-[#119d60] hover:fill-[#119d60] ' xmlns="http://www.w3.org/2000/svg" width="1..3em" height="1.3em" viewBox="0 0 24 24" ><g ><path strokeWidth={2} d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z"></path><circle cx={16.5} cy={7.5} r={1.5} ></circle><circle cx={12} cy={12} r={3} strokeWidth={2} className='stroke-[#119d60] hover:stroke-white '></circle></g></svg>                </div>
                <div className='border border-[#119d60] w-9 h-9 rounded-full me-[px] hover:bg-[#119d60] ' >
                <svg className='my-1.5 mx-1.5 fill-[#119d60] hover:fill-white  ' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" ><path d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005s.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005m1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022M10.001 15.5v-7l6 3.5z"></path></svg>                </div>
              </div>




            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>

    <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className='bg-[#000] '>
    <Disclosure as="nav" className=" ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex flex-1 sm:items-stretch   ">

            <div className="flex flex-shrink-0 lg:items-start items-start lg:ms-0 ms-8 lg:justify-start">            
              <svg xmlns="http://www.w3.org/2000/svg" width="106" height="36" viewBox="0 0 106 36">
  <defs>
    
  </defs>
  <path id="Wave" fill='#119d60'  fill-rule- ="evenodd" class="cls-1" d="M28.146,29.284q-3.934,2.2-7.79,4.544a6.94,6.94,0,0,1-7.712,0q-3.856-2.341-7.79-4.544A7.078,7.078,0,0,1,1,22.576V21.271a5.944,5.944,0,0,0,1.237,1.7c3.482,3.122,5.238-1.987,6.233-4.617,0.005,0,.092-0.271.448-1.019a0.469,0.469,0,0,1,.895-0.064c0.214,0.571.562,1.537,0.959,2.579,0.658,1.73,1.14,3.821,2.333,4.649a2.968,2.968,0,0,0,3.772-.382c1.477-1.875,1.679-3.522,2.269-6.782a24.83,24.83,0,0,1,.668-3.122,2.517,2.517,0,0,1,.9-1.623c0.686-.134,1.054,1.247,1.406,2.229,0.957,2.667,1.323,6.212,2.877,7.452a3.167,3.167,0,0,0,3.676.064c1.084-.815,2.341-3.176,3.329-4.864v5.1A7.078,7.078,0,0,1,28.146,29.284Zm-1.584-8.413a2.872,2.872,0,0,1-1.31-2.037c-0.694-2.507-1.8-7.322-4.283-7.8-1.427-.275-2.325,1.275-2.653,2.134a60.893,60.893,0,0,0-1.95,7.578c-0.185.784-.866,2.444-1.406,2.643-0.864.318-1.522-1.335-1.694-1.879-0.6-1.9-1.83-5.293-3.42-5.891-1.366-.514-1.988.6-2.333,1.115C6.66,18,5.227,22.091,4.251,22.144c-1.63.09-1.915-3-3.2-3.916C1.041,18.218,1.015,18.214,1,18.2v-4.8A7.079,7.079,0,0,1,4.854,6.7q3.934-2.2,7.79-4.543a6.937,6.937,0,0,1,7.712,0Q24.212,4.5,28.146,6.7A7.079,7.079,0,0,1,32,13.408v0.756c-1.457,1.879-2.943,4.211-3.84,5.466C27.8,20.134,27.544,21.285,26.562,20.871Z"/>
  <path id="Reso." fill='#fff' fill-rule- ="evenodd" class="cls-2" d="M43.956,28V20.1h3.5L51.264,28h3.444l-4.172-8.316a5.342,5.342,0,0,0,3.01-2.128,5.927,5.927,0,0,0,.966-3.3,6.053,6.053,0,0,0-.728-2.954,5.2,5.2,0,0,0-2.226-2.114A8.215,8.215,0,0,0,47.736,8.4H40.988V28h2.968Zm0-17.108H47.54a4.074,4.074,0,0,1,3,.938,3.416,3.416,0,0,1,.924,2.506,3.532,3.532,0,0,1-.938,2.548,3.927,3.927,0,0,1-2.954.98H43.956V10.892ZM66.846,27.02a6.306,6.306,0,0,0,2.226-3.276H66.1A3.477,3.477,0,0,1,64.83,25.3a3.705,3.705,0,0,1-2.114.574,4.041,4.041,0,0,1-2.758-1.05,4.291,4.291,0,0,1-1.33-3.066H69.436q0.027-.392.042-0.714t0.014-.6a6.745,6.745,0,0,0-.84-3.332A6.435,6.435,0,0,0,66.3,14.686a6.767,6.767,0,0,0-3.556-.91,7.166,7.166,0,0,0-3.682.924A6.422,6.422,0,0,0,56.6,17.276a8.025,8.025,0,0,0-.882,3.836,7.694,7.694,0,0,0,.9,3.78,6.464,6.464,0,0,0,2.478,2.534,7.142,7.142,0,0,0,3.626.91A6.455,6.455,0,0,0,66.846,27.02Zm-1.47-9.856a3.546,3.546,0,0,1,1.148,2.576h-7.84a3.857,3.857,0,0,1,1.4-2.646,4.2,4.2,0,0,1,2.632-.882A3.843,3.843,0,0,1,65.376,17.164ZM81.35,27.076a3.885,3.885,0,0,0,1.47-3.164,3.261,3.261,0,0,0-.728-2.3,4.581,4.581,0,0,0-1.918-1.19,24.169,24.169,0,0,0-2.59-.714,11.059,11.059,0,0,1-2.254-.756,1.277,1.277,0,0,1-.854-1.148,1.424,1.424,0,0,1,.616-1.19,2.844,2.844,0,0,1,1.736-.462,3.031,3.031,0,0,1,1.834.5,2.059,2.059,0,0,1,.826,1.4h2.856A4.519,4.519,0,0,0,80.65,14.9a5.969,5.969,0,0,0-3.766-1.12,5.781,5.781,0,0,0-3.92,1.218,3.862,3.862,0,0,0-1.4,3.038,2.817,2.817,0,0,0,.77,2.086,5.162,5.162,0,0,0,1.932,1.19,17.9,17.9,0,0,0,2.338.672,11.985,11.985,0,0,1,2.366.686,1.429,1.429,0,0,1,.854,1.442,1.7,1.7,0,0,1-.616,1.288,2.858,2.858,0,0,1-1.96.56,3.386,3.386,0,0,1-2.212-.686,2.962,2.962,0,0,1-1.064-1.638h-3a4.822,4.822,0,0,0,1.96,3.416,7.006,7.006,0,0,0,4.34,1.288A6.131,6.131,0,0,0,81.35,27.076Zm13.958,0.35a6.712,6.712,0,0,0,2.534-2.548,7.56,7.56,0,0,0,.938-3.822,7.56,7.56,0,0,0-.938-3.822,6.748,6.748,0,0,0-2.52-2.548,7.43,7.43,0,0,0-7.126,0,6.711,6.711,0,0,0-2.534,2.548,7.554,7.554,0,0,0-.938,3.822,7.648,7.648,0,0,0,.924,3.822,6.638,6.638,0,0,0,2.506,2.548,7.03,7.03,0,0,0,3.57.91A7.11,7.11,0,0,0,95.308,27.426Zm-5.544-2.17a3.929,3.929,0,0,1-1.456-1.582,5.512,5.512,0,0,1-.56-2.618,5.513,5.513,0,0,1,.56-2.618,3.9,3.9,0,0,1,1.47-1.582,3.826,3.826,0,0,1,5.4,1.582,5.636,5.636,0,0,1,.546,2.618,5.519,5.519,0,0,1-.56,2.618,3.9,3.9,0,0,1-1.47,1.582,3.843,3.843,0,0,1-1.974.532A3.766,3.766,0,0,1,89.764,25.256Zm13.944,2.366a1.8,1.8,0,0,0,.532-1.3,1.843,1.843,0,0,0-1.9-1.876,1.878,1.878,0,0,0-1.386.546,1.81,1.81,0,0,0-.546,1.33,1.778,1.778,0,0,0,.546,1.3,1.878,1.878,0,0,0,1.386.546A1.83,1.83,0,0,0,103.707,27.622Z"/>
</svg>     
            </div>

            <div className="hidden sm:ml-6 sm:block justify-center items-center ms-[20rem]">
              <div className="flex space-x-4 text-lg  ms-[24rem]">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-white' : 'text-gray-300 hover:text-white',
                      'rounded-md px-3 py-2 text-base font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
      
            </div>

            <button
            className=" rounded-lg bg-[#119d60] hover:bg-[#119d60]/80 font-medium text-white  
            px-3 py-1.5 hidden lg:flex ms-[11rem]">
          <Link to="/signup" className="">Log in</Link>
          </button>
   

          </div>


          <div className="flex items-center sm:hidden">
          {/* absolute inset-y-0 left-6  */}
            
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-end justify-end rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

         

        </div>
      </div>
      
     

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'open' : undefined}
              className={classNames(
                item.current ? ' text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    </div>


    <div className='hero lg:mx-[30px]'>
      <div className='lg:flex mt-16 ' 
    //   className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
       <div  >
       <div className=' lg:ms-16'>
        <img src="/assets/heroreso.jpg"
        className='aboutimg mt-4 rounded-3xl w-[100vw] h-[100vh] shadow-2xl bg-dark-1 light-content'
        // width={800} height={800}
      />
        </div>
        <div className='absolute top-[35rem] right-[67rem]'>
        <ul className='mt-8 '>
                    <li className='' >
                      <button className='flex border border-gray-500 bg-gray-800 rounded-xl px-4 py-2'>
                      <svg className='my-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.3em" viewBox="0 0 48 48"><path fill="#673ab7" d="M40 7H8c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h5v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h18v-1.3c-.6-.3-1-1-1-1.7c0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7V41h5c2.2 0 4-1.8 4-4V11c0-2.2-1.8-4-4-4"></path><g fill="#d1c4e9"><circle cx={24} cy={18} r={4}></circle><path d="M31 28s-1.9-4-7-4s-7 4-7 4v2h14z"></path></g></svg>                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
              </button>

                    </li>

                    <li className='mt-2' >
                      <button className='flex border border-gray-500 bg-gray-800 rounded-xl px-4 py-2'>
                      <svg className='my-1' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 48 48"><g fill="none" strokeLinejoin="round" strokeWidth={4}><rect width={28} height={34} x={13} y={10} fill="#2f88ff" stroke="#000"></rect><path stroke="#000" strokeLinecap="round" d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"></path><path stroke="#fff" strokeLinecap="round" d="M21 22H33"></path><path stroke="#fff" strokeLinecap="round" d="M21 30H33"></path></g></svg>                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
              </button>

                    </li>

                    <li className='mt-2' >
                      <button className='flex border border-gray-500 bg-gray-800 rounded-xl px-4 py-2'>
                      <svg className='my-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" ><g fill="none"><path fill="url(#fluentColorHome160)" d="M6 9h4v5H6z"></path><path fill="url(#fluentColorHome161)" d="M8.687 2.273a1 1 0 0 0-1.374 0l-4.844 4.58A1.5 1.5 0 0 0 2 7.943v4.569a1.5 1.5 0 0 0 1.5 1.5h3v-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v4h3a1.5 1.5 0 0 0 1.5-1.5v-4.57a1.5 1.5 0 0 0-.47-1.09z"></path><path fill="url(#fluentColorHome162)" fillRule="evenodd" d="m8.004 2.636l5.731 5.41a.75.75 0 1 0 1.03-1.091L8.86 1.382a1.25 1.25 0 0 0-1.724.007L1.23 7.059a.75.75 0 0 0 1.038 1.082z" clipRule="evenodd"></path><defs><linearGradient id="fluentColorHome160" x1={8} x2={4.796} y1={9} y2={14.698} gradientUnits="userSpaceOnUse"><stop stopColor="#944600"></stop><stop offset={1} stopColor="#cd8e02"></stop></linearGradient><linearGradient id="fluentColorHome161" x1={3.145} x2={14.93} y1={1.413} y2={10.981} gradientUnits="userSpaceOnUse"><stop stopColor="#ffd394"></stop><stop offset={1} stopColor="#ffb357"></stop></linearGradient><linearGradient id="fluentColorHome162" x1={10.262} x2={6.945} y1={-0.696} y2={7.895} gradientUnits="userSpaceOnUse"><stop stopColor="#ff921f"></stop><stop offset={1} stopColor="#eb4824"></stop></linearGradient></defs></g></svg>                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
              </button>

                    </li>
                     
                    </ul>
        </div>
        </div>

    <div className=" md:mt-0 lg:ms-32 pt-5 "
    data-aos="zoom-out">
    <h2 className="text-6xl font-semibold text-white mb-4  ">
    Global Marketing Consulting Agency
    </h2>
    <p className="text-base text-white lg:text-3xl">
    We’re a global marketing company delivering innovative solutions to our clients.

<br /> <br />



    </p>

    <button className=" rounded-lg bg-[#119d60] hover:bg-[#119d60]/80 font-medium text-white mt-8 px-4 py-3">
         Get a Consultation
    </button>


    <ul className='mt-8 '>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 15 15" ><path fill="#119d60"  fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clipRule="evenodd"></path></svg>               
                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
                    </li>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 15 15" ><path fill="#119d60"  fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clipRule="evenodd"></path></svg>               
                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
                    </li>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 15 15" ><path fill="#119d60"  fillRule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z" clipRule="evenodd"></path></svg>               
                     <p className='text-gray-300 text-lg ps-4'>Production or trading 
              </p>
                    </li>
                    </ul>

    </div>
        


       
    </div>
    </div>

    <section className='service mt-[10rem] '>
      <div className='mb-12'>
      <p className='text-sm font-bold text-[#119d60]  text-center mt-8'>OUR SERVICES
       </p>
      <h2 className='text-white text-center mt-8 font-semibold text-4xl'>Business Shaped Solutions.
      </h2>
      <p className='text-white text-lg text-center mt-8'>We are specialists in both economics and information technologies and we apply our full range 
      <br/>  of talent to creating the perfect solution for each client’s needs.
      </p>
      </div>
    
           <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-4 grid-flow-row md:grid-flow-col mt-12 container 
           lg:ms-14 '>
            <div data-aos="zoom-in-right"
    
             className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-right" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-left" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-left" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

           </div>

           <div className='grid grid-col-1 md:grid-col-2 lg:grid-col-4 grid-flow-row md:grid-flow-col mt-12 container 
           lg:ms-14 '>
            <div data-aos="zoom-in-right"
    
             className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-right" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-left" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

            <div data-aos="zoom-in-left" className='lg:w-[270px] md:w-[270px] h-60 border border-gray-800 hover:bg-[#119d60] rounded-lg '>
              <div className='flex justify-center mt-5'>
              <p className='text-xl font-medium text-gray-200 ps-5'> Strategic <br />Planning
              </p>
              <div className='bg-[#119d60]/40 w-[60px] h-[60px] opacity-80 rounded-full ms-12 '>
              <svg className='mx-3.5 my-3.5' xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#119d60" d="M5 10.725L2.5 9.3q-.225-.125-.363-.363T2 8.426v-2.85q0-.275.138-.513T2.5 4.7L5 3.275q.225-.125.5-.125t.5.125L8.5 4.7q.225.125.363.363T9 5.575v2.85q0 .275-.137.513T8.5 9.3L6 10.725q-.225.125-.5.125t-.5-.125M5.5 8.7L7 7.85v-1.7L5.5 5.3L4 6.15v1.7zm11 3.075V9.45l2.5 1.475q.475.275.738.738t.262.987v4.7q0 .525-.262.988t-.738.737L15 21.4q-.475.275-1 .275t-1-.275l-4-2.325q-.475-.275-.737-.737T8 17.35v-4.7q0-.525.263-.987T9 10.925l2.5-1.475v2.325l-1.5.875v4.7l4 2.325l4-2.325v-4.7zM15 8v5q0 .425-.288.713T14 14t-.712-.288T13 13V3q0-.425.288-.712T14 2h6.125q.6 0 .9.525t-.05 1.025l-.6.9Q20.2 4.7 20.2 5t.175.55l.6.9q.35.5.05 1.025t-.9.525zM5.5 7"></path></svg>

              </div>
              </div>

              <p className='text-md text-gray-300 my-12 mx-12 '> Strategy experience and analytical  expertise combine to enable.
              </p>
            </div>

           </div>

    </section>

    <section className=' about mt-48'>
              <div className='lg:flex mx-14'>
                <div  className=''>
                  <div className='lg:ms-16'>
                  <img className='w-[680px] h-[55vh] rounded-xl object-cover' src="/assets/aboutimg.jpg" alt=""/>

                  </div>
                  <div className='absolute top-[127rem] right-[73rem]'>
                  <img className='w-[120px] h-[20vh] rounded-xl object-cover' src="/assets/shortaboutimg.jpg" alt=""/>

                  </div>

                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" 
     className='w-full lg:ms-24 mt-5 lg:mt-0 justify-center '>
                  <p className='text-md font-bold text-[#119d60]'>
                  ABOUT US

                  </p>
                  <h3 className='text-3xl font-semibold text-gray-200 pt-8'>
                  We Provides Best Advice For Your Business.

                  </h3>
                  <p className='text-gray-300  pt-8'>Our mission is to provide everyone with high and useful reward for his/her trading, purchase and investment. Our goal is to make the cryptocurrency market grow faster. Our goal is to educate global citizens.
                  </p>
                  <ul className='mt-8 '>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" ><path fill="none" stroke="#119d60" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>
                    <p className='text-gray-300 text-lg ps-4'>Production or trading of good or services for sale
                    </p>
                    </li>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" ><path fill="none" stroke="#119d60" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>
                    <p className='text-gray-300 text-lg ps-4'>Production or trading of good or services for sale for sale
                    </p>
                    </li>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" ><path fill="none" stroke="#119d60" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>
                    <p className='text-gray-300 text-lg ps-4'>Production or trading of good or services for sale for
                    </p>
                    </li>
                    <li className='flex ' >
                    <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" ><path fill="none" stroke="#119d60" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m2.75 8.75l3.5 3.5l7-7.5"></path></svg>
                    <p className='text-gray-300 text-lg ps-4'>Production or trading of good or services for sale not for sale 
                    </p>
                    </li>
                  </ul>
                  
                </div>
              </div>
    </section>

    <ProjectSec/>
    <Testimonials/>
    {/* <AutoScroll/> */}
    <Footer/>

    
    {/* <section className='footer mt-48'>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 grid-flow-row md:grid-flow-col gap-4 lg:gap-4  footdiv pt-5 mb-5 pb-5 px-[70px]">
      <div className='col-span-2 lg:col-span-1 md:col-span-2 md:w-full w-full lg:w-[490px] col1'>
      <div className='logodiv mt-8'>
         <svg className='mb-8' xmlns="http://www.w3.org/2000/svg" width="106" height="36" viewBox="0 0 106 36">
  <defs>
    
  </defs>
  <path id="Wave" fill='#119d60'  fill-rule- ="evenodd" class="cls-1" d="M28.146,29.284q-3.934,2.2-7.79,4.544a6.94,6.94,0,0,1-7.712,0q-3.856-2.341-7.79-4.544A7.078,7.078,0,0,1,1,22.576V21.271a5.944,5.944,0,0,0,1.237,1.7c3.482,3.122,5.238-1.987,6.233-4.617,0.005,0,.092-0.271.448-1.019a0.469,0.469,0,0,1,.895-0.064c0.214,0.571.562,1.537,0.959,2.579,0.658,1.73,1.14,3.821,2.333,4.649a2.968,2.968,0,0,0,3.772-.382c1.477-1.875,1.679-3.522,2.269-6.782a24.83,24.83,0,0,1,.668-3.122,2.517,2.517,0,0,1,.9-1.623c0.686-.134,1.054,1.247,1.406,2.229,0.957,2.667,1.323,6.212,2.877,7.452a3.167,3.167,0,0,0,3.676.064c1.084-.815,2.341-3.176,3.329-4.864v5.1A7.078,7.078,0,0,1,28.146,29.284Zm-1.584-8.413a2.872,2.872,0,0,1-1.31-2.037c-0.694-2.507-1.8-7.322-4.283-7.8-1.427-.275-2.325,1.275-2.653,2.134a60.893,60.893,0,0,0-1.95,7.578c-0.185.784-.866,2.444-1.406,2.643-0.864.318-1.522-1.335-1.694-1.879-0.6-1.9-1.83-5.293-3.42-5.891-1.366-.514-1.988.6-2.333,1.115C6.66,18,5.227,22.091,4.251,22.144c-1.63.09-1.915-3-3.2-3.916C1.041,18.218,1.015,18.214,1,18.2v-4.8A7.079,7.079,0,0,1,4.854,6.7q3.934-2.2,7.79-4.543a6.937,6.937,0,0,1,7.712,0Q24.212,4.5,28.146,6.7A7.079,7.079,0,0,1,32,13.408v0.756c-1.457,1.879-2.943,4.211-3.84,5.466C27.8,20.134,27.544,21.285,26.562,20.871Z"/>
  <path id="Reso." fill='#fff' fill-rule- ="evenodd" class="cls-2" d="M43.956,28V20.1h3.5L51.264,28h3.444l-4.172-8.316a5.342,5.342,0,0,0,3.01-2.128,5.927,5.927,0,0,0,.966-3.3,6.053,6.053,0,0,0-.728-2.954,5.2,5.2,0,0,0-2.226-2.114A8.215,8.215,0,0,0,47.736,8.4H40.988V28h2.968Zm0-17.108H47.54a4.074,4.074,0,0,1,3,.938,3.416,3.416,0,0,1,.924,2.506,3.532,3.532,0,0,1-.938,2.548,3.927,3.927,0,0,1-2.954.98H43.956V10.892ZM66.846,27.02a6.306,6.306,0,0,0,2.226-3.276H66.1A3.477,3.477,0,0,1,64.83,25.3a3.705,3.705,0,0,1-2.114.574,4.041,4.041,0,0,1-2.758-1.05,4.291,4.291,0,0,1-1.33-3.066H69.436q0.027-.392.042-0.714t0.014-.6a6.745,6.745,0,0,0-.84-3.332A6.435,6.435,0,0,0,66.3,14.686a6.767,6.767,0,0,0-3.556-.91,7.166,7.166,0,0,0-3.682.924A6.422,6.422,0,0,0,56.6,17.276a8.025,8.025,0,0,0-.882,3.836,7.694,7.694,0,0,0,.9,3.78,6.464,6.464,0,0,0,2.478,2.534,7.142,7.142,0,0,0,3.626.91A6.455,6.455,0,0,0,66.846,27.02Zm-1.47-9.856a3.546,3.546,0,0,1,1.148,2.576h-7.84a3.857,3.857,0,0,1,1.4-2.646,4.2,4.2,0,0,1,2.632-.882A3.843,3.843,0,0,1,65.376,17.164ZM81.35,27.076a3.885,3.885,0,0,0,1.47-3.164,3.261,3.261,0,0,0-.728-2.3,4.581,4.581,0,0,0-1.918-1.19,24.169,24.169,0,0,0-2.59-.714,11.059,11.059,0,0,1-2.254-.756,1.277,1.277,0,0,1-.854-1.148,1.424,1.424,0,0,1,.616-1.19,2.844,2.844,0,0,1,1.736-.462,3.031,3.031,0,0,1,1.834.5,2.059,2.059,0,0,1,.826,1.4h2.856A4.519,4.519,0,0,0,80.65,14.9a5.969,5.969,0,0,0-3.766-1.12,5.781,5.781,0,0,0-3.92,1.218,3.862,3.862,0,0,0-1.4,3.038,2.817,2.817,0,0,0,.77,2.086,5.162,5.162,0,0,0,1.932,1.19,17.9,17.9,0,0,0,2.338.672,11.985,11.985,0,0,1,2.366.686,1.429,1.429,0,0,1,.854,1.442,1.7,1.7,0,0,1-.616,1.288,2.858,2.858,0,0,1-1.96.56,3.386,3.386,0,0,1-2.212-.686,2.962,2.962,0,0,1-1.064-1.638h-3a4.822,4.822,0,0,0,1.96,3.416,7.006,7.006,0,0,0,4.34,1.288A6.131,6.131,0,0,0,81.35,27.076Zm13.958,0.35a6.712,6.712,0,0,0,2.534-2.548,7.56,7.56,0,0,0,.938-3.822,7.56,7.56,0,0,0-.938-3.822,6.748,6.748,0,0,0-2.52-2.548,7.43,7.43,0,0,0-7.126,0,6.711,6.711,0,0,0-2.534,2.548,7.554,7.554,0,0,0-.938,3.822,7.648,7.648,0,0,0,.924,3.822,6.638,6.638,0,0,0,2.506,2.548,7.03,7.03,0,0,0,3.57.91A7.11,7.11,0,0,0,95.308,27.426Zm-5.544-2.17a3.929,3.929,0,0,1-1.456-1.582,5.512,5.512,0,0,1-.56-2.618,5.513,5.513,0,0,1,.56-2.618,3.9,3.9,0,0,1,1.47-1.582,3.826,3.826,0,0,1,5.4,1.582,5.636,5.636,0,0,1,.546,2.618,5.519,5.519,0,0,1-.56,2.618,3.9,3.9,0,0,1-1.47,1.582,3.843,3.843,0,0,1-1.974.532A3.766,3.766,0,0,1,89.764,25.256Zm13.944,2.366a1.8,1.8,0,0,0,.532-1.3,1.843,1.843,0,0,0-1.9-1.876,1.878,1.878,0,0,0-1.386.546,1.81,1.81,0,0,0-.546,1.33,1.778,1.778,0,0,0,.546,1.3,1.878,1.878,0,0,0,1.386.546A1.83,1.83,0,0,0,103.707,27.622Z"/>
</svg>     
         </div>
         <p className='text-white text-lg'>
            Join Thousands of YouTubers Using ytthumbnail.io to Elevate Their Thumbnails and Grow Their Channels!
         </p>
      </div>
      <div className='col-span-1 lg:col-span-1 md:col-span-1 lg:w-40 md:w-20 lg:ms-[13.5rem] col2 mt-5 ms-4'>
      <p className='text-white font-medium text-2xl'>Reso
      </p>
      <ul className='footul'>
        <li >
            <a className='foota'>Home</a>
        </li>

        <li >
            <a className='foota'>Home</a>
        </li>
        <li >
            <a className='foota'>Home</a>
        </li>
        <li >
            <a className='foota'>Home</a>
        </li>
        <li >
            <a className='foota'>Home</a>
        </li>
      

      </ul>

      </div>
      <div className='col-span-1 lg:col-span-1 md:col-span-1 col3 mt-5'>
        <p className='text-white'>Terms</p>
        <p className='text-white'>Privacy Policy</p>
        <p className='text-white'>Refund Policy</p>
        <p className='text-white mt-4'>Follow us:
          </p>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-flow-col lg:gap-4 md:gap-5  gap-3 w-75 mt-1'>
          
        <div className=' border border-white-600 rounded-md items-center px-2.5	pt-2.5 w-12 h-12 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" ><path fill="white" d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z"></path></svg>        
        </div>

        <div className='border border-white-600 rounded-md  items-center px-2.5	pt-2.5 w-12 h-12'>

<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" ><circle cx={17} cy={7} r={1.5} fill="white" fillOpacity={0}><animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></animate></circle><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={72} strokeDashoffset={72} d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></animate></path><path strokeDasharray={28} strokeDashoffset={28} d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"></animate></path></g></svg>      
</div>
      
      
      <div className='border border-white-600 rounded-md  items-center px-2.5	pt-2.5 w-12 h-12'>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" ><path fill="white" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path></svg>        
      </div>

      <div className='border border-white-600 rounded-md  items-center px-2.5	pt-2.5 w-12 h-12'>
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" ><path fill="none" stroke="white" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={1.5} d="M22.54 6.42a2.77 2.77 0 0 0-1.945-1.957C18.88 4 12 4 12 4s-6.88 0-8.595.463A2.77 2.77 0 0 0 1.46 6.42C1 8.148 1 11.75 1 11.75s0 3.602.46 5.33a2.77 2.77 0 0 0 1.945 1.958C5.121 19.5 12 19.5 12 19.5s6.88 0 8.595-.462a2.77 2.77 0 0 0 1.945-1.958c.46-1.726.46-5.33.46-5.33s0-3.602-.46-5.33ZM9.75 15.021V8.48l5.75 3.271z"></path></svg>      
      </div>

     </div>

    </div>
    </div>
    </section> */}

    </>
  )
}
