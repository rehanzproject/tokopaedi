
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";
import { addTransaction } from "../../../config/redux/transactionSlice/transactionSlice";

export default function Pembayaran() {
   const location =  useLocation()
    const dispatch =  useDispatch()
   const navigate =  useNavigate()
   const state = location.state
   const user =  useSelector((state)=>state.user.user)
    const [remainingTime, setRemainingTime] = useState(24 * 60 * 60 - 1); // Set initial time to 23:55:59
  let va = ""
  if (state.radio.name == "Livin By Mandiri"){
    va = "88708"
  }  else {
    va = "80777"
  }
  const name= state.product[0]["productName"]
 const fullName = name.replace(/\s/g, '');
  const d = new Date()
  const date = d.toLocaleDateString('pt-PT')
  const totalPembayaran = state.totalBelanja + state.totalEkspedisi * state.product.length
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = date.replace(/\//g, ' ');
  let invoice = `INV/${date}/SHS/${fullName.toUpperCase().slice(0, 6)}`
  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
}, [])
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const handlePembayaran = () =>{
    dispatch(addTransaction({...state,invoice:invoice, hari:today, status:true}))
    navigate('/success-page')
  }
  const handleBuy = () =>{
    dispatch(addTransaction({...state,invoice:invoice, hari:today, status:false}))
    navigate('/')
  }
  
  return (
    <>
      <main className="relative  transform overflow-hidden rounded-lg bg-white px-10 shadow-xl transition-all  h-screen sm:my-8 sm:w-full sm:max-w-xl sm:items-center">
        <div>
          <h1 className="mt-4 py-4 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pembayaran
          </h1>
        </div>
        <p>Batas Akhir Pembayaran</p>
        <div className="justify-between flex font-bold">
          <p>Kamis ,11 Mei 2023 , 23:59</p>
          <p className="text-red-500">{hours}:{minutes}:{seconds}</p>
        </div>
        <div className="border-t-8 justify-between py-2 flex">
           <p className="font-bold">{state.radio.name}</p>
          <img src={state.radio.image} alt={state.radio.name} className="h-10 sm:w-20 " />
        </div> 

        <div className="border-y py-2 text-gray-500">
          <p>Nomor Virtual Account</p>
          <p className="font-semibold">{va}{user.nomorHP}</p>
          <p className="pt-3">Total Pembayaran</p>
          <p className="font-bold text-black text-xl">Rp{totalPembayaran.toLocaleString()}</p>
        </div>
        
       
        <button onClick={handleBuy} className="inline-flex border-2 items-center my-4 justify-center rounded-md text-green-500 py-2 px-10 text-sm font-semibold shadow-sm sm:ml-3 sm:w-full">
          Beli Lagi
        </button>
       
        <button onClick={handlePembayaran} className="inline-flex items-center my-4 justify-center rounded-md bg-green-500 py-2 px-10 text-sm font-semibold text-white shadow-sm  hover:bg-green-600 sm:ml-3 sm:w-full">
          Anggap saja sudah Bayar
        </button>
        </main>
        <img src="https://rexdl.co.id/wp-content/uploads/2020/08/tokopedia3.png" alt="" className="absolute w-1/2 right-5 top-0 sm:bottom-0" />
    
    </>
  );
}
