import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  createSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { removeAllProduct } from "../../../config/redux/productSlice/productSlice";
import { removeTransaction } from "../../../config/redux/transactionSlice/transactionSlice";
import { logoutUser } from "../../../config/redux/userSlice/userSlice";
import logo from "../../../assets/images/logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function NavigationBar() {
  const userPhoto = useSelector((state) => state.user.photoURL);
  const user = useSelector((state) => state.user.email);
  const isLogin = useSelector((state) => state.user.isLogin);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const location = useLocation();
  const [text, setText] = useState("");
  const [nav, setNav] = useState("");
  const navigate = useNavigate();

  const navigation = [
    { name: "Beranda", href: "/", current: false },
    { name: "Produk", href: "/product", current: false },
    { name: "Transaksi", href: "/transaction", current: false },
  ];

  const handleClick = () => {
    navigate({
      pathname: location.search !== "" ? "" : "search",
      search: `?${createSearchParams({
        pn: text,
      })}`,
    });
  };
  const handleLogout = () => {
    dispatch(removeAllProduct());
    dispatch(removeTransaction());
    dispatch(logoutUser());
    navigate("/");
  };
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
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={
                          isLogin
                            ? () => navigate(item.href)
                            : () => navigate("/login")
                        }
                        className={`${
                          item.href === location.pathname
                            ? "text-green-400"
                            : ""
                        } text-black hover:text-green-500 rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Mau cari apa hari ini?"
                    className=" w-96 p-2 border pl-10 rounded-md "
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  <MagnifyingGlassIcon
                    className="h-10 px-2 p-1 relative rounded-md bg-orange-300 hover:bg-orange-400"
                    onClick={handleClick}
                  />
                </div>
              </div>
              <div className="absolute  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  onClick={() => navigate("/cart")}
                  className="p-3 text-gray-600  hover:text-black  hover:bg-gray-100"
                >
                  <span className="sr-only">View Notification</span>
                  <ShoppingCartIcon className="h-10 w-10 " aria-hidden="true" />
                </a>
                <p className="relative text-xl font-bold">{products.length}</p>

                {/* Profile dropdown */}
                <Menu as="div" className="relative z-1 ml-3">
                  <div>
                    <Menu.Button className="flex text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <div className="relative ">
                        <h1>Selamat Datang </h1>
                        <h2 className="px-1 font-bold inline-block">
                          {isLogin ? user : "Masuk"}{" "}
                        </h2>
                      </div>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={userPhoto}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={isLogin ? "/setting/account" : "/login"}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block text-center px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            {isLogin ? "Pengaturan" : "Masuk"}
                          </a>
                        )}
                      </Menu.Item>
                      {isLogin && (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "w-full  px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default NavigationBar;
