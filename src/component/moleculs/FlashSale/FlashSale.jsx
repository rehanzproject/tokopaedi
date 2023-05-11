import React from "react";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../config/redux/productSlice/productSlice";
function FlashSale() {
  const product = [
    {
      id: "06b633dd-3476-4f89-aa80-9a83b0147439",
      imageSrc:
        "https://i5.walmartimages.com/asr/d0a0ecf9-c1e9-469f-8a71-3aef77c2aabe_1.864fde21b9e33212786b575256016647.jpeg",
      productCategory: "Sport",
      productName: "Nike Women's Air Max Motion Running Shoes",
      productPrice: 2500000,
      rating: 5,
    },
    {
      id: "2882c493-3868-445e-9d1c-539f24fef060",
      imageSrc:
        "https://i5.walmartimages.com/asr/f02e247b-12d6-4ed7-a5fa-45fcdec6bdf1.d4801b402256f77ff1b0326b60cab241.jpeg",
      productCategory: "School",
      productName: "Nike Women's  Black Running Shoes",
      productPrice: 1500000,
      rating: 5,
    },
  ];
  const dispatch = useDispatch()
  const [remainingTime, setRemainingTime] = useState(24 * 17 * 60 - 1); // Set initial time to 23:55:59

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;
  const [time, setTime] = useState(0);
  return (
    <div className="p-10 bg-gray-50 ">
      <div className="bg-white p-10  ">
        <div className=" font-bold text-3xl p-5 flex">
          <h1>Flash Deals!</h1>
          <p className="text-xl font-normal p-2">Berakhir dalam </p>
          <div className="kotak flex text-white">
            <div className="bg-red-500 flex">
              <p className="p-2">0{hours}:</p>
              <p className="p-2">{minutes}:</p>
              <p className="p-2">{seconds}</p>
            </div>
          </div>
        </div>
        <div className="flex ">
          {product.map((v, i) => (
            <div
              key={i}
              className="m-3 max-w-lg  rounded-lg  shadow-lg overflow-hidden"
            >
              <div className=" p-6 py-5 h-1/4 inline-block">
                <h2 className="text-xl font-medium mt-4">{v.productName}</h2>
                <p className="text-gray-500  mt-2">{v.productCategory} </p>
                <div className="flex ">
                  <p className="text-sm font-medium text-gray-700 mt-2 line-through">
                    Rp{v.productPrice * 2}
                  </p>
                  <p className="text-lg font-medium text-yellow-300 m-2">
                    Rp{v.productPrice.toLocaleString()}!
                  </p>
                </div>
                <button
                  onClick={() => dispatch(addProduct(v))}
                  className="rounded-2xl  bg-yellow-300 my-4 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Buy Now!
                </button>
              </div>
              <div className="relative mb-2 pl-40">
                <img src={v.imageSrc} alt="Product Image" width={200} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
