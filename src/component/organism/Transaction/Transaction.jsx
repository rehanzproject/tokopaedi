import React, { useState } from "react";
import { useSelector } from "react-redux";
import DetailModal from "../../atoms/Modals/DetailModal/DetailModal"
import NavigationBar from "../../moleculs/NavigationBar/NavigationBar";
function Transaction() {
  const transactions = useSelector((state) => state.transaction);
  const product = transactions.map((v, i) => v.product);
 
  const [open, setOpen] = useState(false);
  const [value, setValue ]= useState()
  const handleClick = (v) => {
    setValue(v)
    setOpen(!open)
  }
  return (
    <>
      <NavigationBar />
      {open && <DetailModal state={value} />}
      <div className="px-24 mt-6">
        <h1 className="font-bold text-2xl">Daftar Transaksi</h1>
        <div className="border py-2 my-4 rounded-lg">
          {transactions.map((v, i) => (
            <div key={i} className="border  rounded-lg m-5 p-5">
              <div className="flex ">
                <p className="font-bold pr-2">Belanja</p>
                <p className="pr-4">{v.hari}</p>
                <p className={`font-bold bg-${v.status ? "green" : "gray"}-200 text-${v.status ? "green" : "gray"}-600 px-3 text-center text-sm justify-center items-center `}>
                  {v.status ? 'Selesai' : 'Menunggu Pembayaran'}
                </p>
                <p className="font-normal px-2">{v.invoice}</p>
              </div>
                 <div className=" flex py-5">
                <img
                  src={v.product[0].imageSrc}
                  alt={v.product[0].productName}
                  className="object-center object-cover px-2"
                  width={100}
                />

                <div className=" justify-between">
                  <p className="font-bold ">{v.product[0].productName}</p>
                  <p className="text-gray-500 text-sm">
                    Total {v.product[0].qty} Barang x Rp{v.product[0].productPrice}
                  </p>
                  <button
                    onClick={() => handleClick(v)}
                    className="text-green-600 font-bold text-sm"
                  >
                    Lihat Detail Transaksi
                  </button>
                </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Transaction;
