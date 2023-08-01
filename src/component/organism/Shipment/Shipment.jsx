import { useState } from "react";
import diskon from "../../../assets/images/diskon.jpg";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogo from "../../moleculs/NavbarLogo/NavbarLogo";
import Modals from '../../atoms/Modals/PaymentModal/Modals'
import { makeRupiahValue } from "../../../config/helper/helperMethod";
export default function Shipment() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate()
  const location = useLocation()
  const jasaEkspedisi = parseInt(select);
  const profile = useSelector((state) => state.user.user);
  const isProfile = useSelector((state) => state.user.isProfile);
  const products = location.state
  
  const totalCheckout = products.reduce(
    (accumulator, currentValue) => currentValue.productPrice + accumulator,
    0
  );

  return (
    <>
      <NavbarLogo />
      <div className="text font-medium py-8 px-20 max-w-4xl">
        <h1 className="text-2xl">Checkout</h1>
        <h1 className=" py-3">Alamat Pengiriman</h1>
        {isProfile ? (
          <>
            {" "}
            <h1 className="border-t font-bold text-md">
              {profile.nama} <span className="font-normal">(Rumah)</span>{" "}
            </h1>
            <p className=" py-2">{profile.nomorHP}</p>
            <p className="font-normal text-gray-500">{profile.alamatLengkap}</p>
            <p className="font-normal  text-gray-500 border-b ">
              {profile.pinPoint}
            </p>
          </>
        ) : (
          <>
            <h1>
              Anda belum isi Alamat , silahkan isi Terlebih dahulu{" "}
              <a onClick={()=>navigate('/setting/account')} className="text-green-500">
                Disini
              </a>{" "}
            </h1>
          </>
        )}
        <div className="border text-center w-1/4 my-2 rounded-lg  py-2">
          <button onClick={()=>navigate('/setting/account')} className="">Ganti Alamat</button>
        </div>
      </div>
      <div className="max-w-4xl px-10 ">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y border-t divide-gray-200">
            {products.map((product, i) => (
              <li key={i} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col max-w-4xl">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.productName}</a>
                      </h3>
                      <h1 className="pr-40">Pilih Durasi</h1>
                    </div>
                    <div className="flex justify-between  ">
                      <h1>{product.productCategory}</h1>
                      
                      <select
                        onChange={(e) => setSelect(e.target.value)}
                        value={select}
                        className="inline-flex text-center font-bold text-white w-60 py-2 px-3 border border-gray-300 bg-green-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option className="bg-white text-black flex" value="">
                          Pengiriman
                        </option>
                        <option className="bg-white text-black" value="30000">
                          Next Day{" "}
                        </option>

                        <option className="bg-white text-black" value="20000">
                          Regular{" "}
                        </option>
                        <option className="bg-white text-black" value="10000">
                          Ekonomi
                        </option>
                        <option className="bg-white text-black" value="35000">
                          Kargo
                        </option>
                      </select>
                    </div>
                    <p >x{product.qty}</p>
                    <p className=" text-lg font-bold">
                      {makeRupiahValue(product.productPrice)}
                    </p>

                    {/* <p className="bg-green-500 text-white text-center">Pilih pembayaran</p> */}
                  </div>
                  <div className="flex py-2 flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">{product.quantity}</p>
                  </div>
                  <div className="border-t py-1 flex justify-between text-xl font-bold ">
                    <h1>Subtotal</h1>
                    <h1>{makeRupiahValue(product.productPrice)}</h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border rounded-md shadow-lg w-80 fixed inset-y-0 right-0 m-24 border-gray-200 px-4 py-6 sm:px-6">
        <div className="border p-2  flex items-center">
          <img src={diskon} alt="diskon" width={40} />
          <p className="font-bold text-gray-500"> Makin hemat pakai promo </p>
        </div>
        <div className="border-t text-base  py-3 font-medium text-gray-900">
          <p>Ringkasan Belanja</p>
        </div>
        <div className="flex py-2 text-gray-500 justify-between">
          <p>Total Harga({products.length} Barang) </p>
          <p className="font-bold">{makeRupiahValue(totalCheckout)}</p>
        </div>
        <div className="flex py-2 text-gray-500 justify-between">
          <p>Diskon </p>
          <p className="font-bold">- Rp0</p>
        </div>
        <div className="flex py-2 text-gray-500 justify-between">
          <p>Jasa Ekspedisi </p>
          <p className="font-bold">{makeRupiahValue(jasaEkspedisi * products.length)}</p>
        </div>

        <div className="border-t py-2 flex justify-between font-bold text-lg">
          <p>Total Tagihan</p>
          <p>{makeRupiahValue(totalCheckout + jasaEkspedisi)}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={() => setOpen(!open)}
            disabled={!isProfile}
            className="w-full text-center items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-600"
          >
            Pilih Pembayaran
          </button>
          {open && <Modals totalBelanja={totalCheckout} totalEkspedisi={jasaEkspedisi} product={products} /> }
        </div>
      </div>
    </>
  );
}
