import React, { useState } from "react";
import logo from '../../../assets/images/logo.png'
import { Disclosure} from "@headlessui/react";
import {
  Bars3Icon,
  
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function NavbarLogo() {
  const navigate = useNavigate()
  return (
    <Disclosure as="nav" className="border-b sticky">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="cursor-pointer hidden h-8 w-auto lg:block"
                    src={logo} alt="Your Company"
                    onClick={()=> navigate('/')}
                  />
                </div>
              
              </div>
             
            </div>
          </div>

         
        </>
      )}
    </Disclosure>
  );
}

export default NavbarLogo;
