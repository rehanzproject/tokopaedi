import React from "react";
import { useNavigate } from "react-router-dom";

function BreadCrumbs({name}) {
  const navigate = useNavigate()
  return (
    <nav className="w-full rounded-md px-24 py-2">
      <ol className="list-reset flex">
        <li>
          <a
          onClick={()=>navigate('/')}
            
            className="text-primary text-green-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Beranda
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400"> {`>`} </span>
        </li>
        <li>
          <a
          onClick={()=>navigate('/product')}
            
            className="text-primary text-green-500 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Product
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">{`>`} </span>
        </li>
        <li className="">{name}</li>
      </ol>
    </nav>
  );
}

export default BreadCrumbs;
