import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DetailModal({ state }) {
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.user.user);
  const cancelButtonRef = useRef(null);
  const totalHarga = state.totalBelanja + state.totalEkspedisi * state.product.length;
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="border-b justify-between sm:flex sm:items-start">
                    <Dialog.Title
                      as="h3"
                      className="text-xl px-4 font-semibold leading-6 text-gray-900"
                    >
                      Detail Transaksi
                    </Dialog.Title>
                    <XMarkIcon
                      style={{ width: 30 }}
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  <div className=" mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <p className="py-2 font-bold border-dashed border-b">
                      {state.status ? "Selesai" : "Menunggu Pembayaran"}
                    </p>
                    <div className="flex justify-between text-sm ">
                      <p className="text-gray-500">No invoice</p>
                      <p className="text-green-500 font-bold">
                        {state.invoice}
                      </p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <p>Tanggal Pembelian</p>
                      <p>{state.hari}</p>
                    </div>
                  </div>
                  <div className="py-4 ">
                    <h1 className="font-semibold">Detail Produk</h1>
                    {state.product.map((v, i) => (
                      <div className="border my-1 rounded-lg justify-between flex ">
                        <img
                          src={v.imageSrc}
                          alt=""
                          className="object-fill object-center h-16 "
                        />
                        <p className="text-sm font-bold">
                          {v.productName}{" "}
                          <p className="font-normal">1x Rp{v.productPrice}</p>{" "}
                        </p>
                        <p className="border-l px-2">
                          Total Harga{" "}
                          <p className="font-semibold">
                            Rp {v.productPrice.toLocaleString()}
                          </p>
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t-8">
                    <h1 className="font-bold">Info Pengiriman</h1>

                    <p className="">
                      Alamat :{" "}
                      <span className="font-bold text-sm px-4">
                        {user.nama}
                      </span>{" "}
                    </p>
                    <div className="px-20 text-sm">
                      <p>{user.nomorHP}</p>
                      <p>{user.alamatLengkap}</p>
                      <p>{user.pinPoint}</p>
                    </div>
                  </div>
                  <div className="border-t-8 ">
                    <h1 className="font-bold">Rincian Pembayaran</h1>
                    <div className="flex justify-between ">
                      <p>Metode Pembayaran</p>
                      <p>{state.radio.name}</p>
                    </div>
                    <div className="flex justify-between py-1 text-sm text-gray-500 border-dashed border-t">
                      <p>Total Harga</p>
                      <p>Rp{state.totalBelanja}</p>
                    </div>
                    <div className="flex justify-between py-1 text-sm text-gray-500 ">
                      <p>Total Ongkos Kirim</p>
                      <p>Rp{state.totalEkspedisi * state.product.length}</p>
                    </div>
                    <div className="flex justify-between py-1 font-bold border-dashed border-t ">
                      <p>Total Tagihan</p>
                      <p>Rp{totalHarga.toLocaleString()}</p>
                    </div>
                    {!state.status && (
                      <button className="w-full text-center border border-green-500 text-green-500 font-bold py-2 rounded-lg">
                        Bayar Sekarang
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
