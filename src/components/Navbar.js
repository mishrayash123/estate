import {Transition} from "@headlessui/react";
import React, {useState, useRef} from "react";
import {Link} from 'react-router-dom'






const Navbar =({setfav}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  const divRef = useRef()

 





  return (
    <div className="fixed-top">
      <nav className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              </div>
                <a className="text-purple-900 text-3xl italic text-2xl mb-2" href="/">Estate</a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/rent" className=" hover:bg-blue-900 text-base  text-red-900 hover:text-white  px-3 py-2 rounded-md text-sm font-medium">
                                        Rent
                                    </Link>
                                    <Link to="/buy" className=" hover:bg-blue-900 text-base  text-red-900 hover:text-white  px-3 py-2 rounded-md text-sm font-medium">
                                        Buy
                                    </Link>
                                    <Link to="/sell" className=" hover:bg-blue-900 text-base  text-red-900 hover:text-white  px-3 py-2 rounded-md text-sm font-medium">
                                        Sell
                                    </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                
                                <Link to="/login" type="button" className="btn btn-outline-primary hover:bg-blue-900  text-red-900 px-3 py-2 rounded-md text-sm font-medium hover:text-white">
                                Login
                                </Link>
                                <Link to="/login" type="button" className="btn btn-outline-primary hover:bg-blue-900  text-red-900 px-3 py-2 rounded-md text-sm font-medium hover:text-white">
                                Signup
                                </Link>
                                
                </div>
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/rent" className="hover:bg-blue-900  text-red-900 block px-3 py-2 rounded-md text-base hover:text-white font-medium">
                                    Rent
                                </Link>
                                
                                <Link to="/buy" className="hover:bg-blue-900 text-red-900 block px-3 py-2 rounded-md hover:text-white text-base font-medium">
                                Buy
                                </Link>
                                <Link to="/sell" className="hover:bg-blue-900 text-red-900 block px-3 py-2 rounded-md hover:text-white text-base font-medium">
                                Sell
                                </Link>
                                <Link to="/login" type="button" className=" btn btn-outline-primary  hover:bg-blue-900 text-red-900 block px-3 py-2 rounded-md hover:text-white text-base font-medium">
                                Login
                                </Link>
                                <Link to="/login" type="button" className=" btn btn-outline-primary  hover:bg-blue-900 text-red-900 block px-3 py-2 rounded-md hover:text-white text-base font-medium">
                                Signup
                                </Link>
                               
              </div>
            </div>
          )}
        </Transition>
      </nav>
       </div>
  );
}

export default Navbar;