import {  useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import centang from '../assets/images/centangg.png'
export default function SuccessPage() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    } else {
      setTimeout(() => setCount(count - 1), 1000);
    }
  }, [count, navigate]);
  return (
    <>
      <main className="h-screen min-h-full  place-items-center  bg-green-400 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="">
          <img src={centang} className="animate-bounce items-center w-48 justify-center mx-auto bg-green-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" alt="" />
          
          </div>
          <h1 className="mt-4 text-white text-3xl font-bold tracking-tight sm:text-5xl">
            Pembayaran Sukses
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Terimakasih sudah belanja di Toko Kami
          </p>
          <div className="mt-10 flex  text-gray-500 items-center justify-center gap-x-6">
          <div>Kembali ke Beranda dalam {count} detik...</div>
          </div>
        </div>
      </main>
    </>
  );
}
