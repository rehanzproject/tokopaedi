import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../../config/redux/transactionSlice/transactionSlice";
import { useNavigate } from "react-router-dom";
import { makeRupiahValue } from "../../../../config/helper/helperMethod";

export default function Modals({ totalBelanja, totalEkspedisi, product }) {
  const [open, setOpen] = useState(true);
  const [radio, setRadio] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methodPayment = [
    {
      name: "BCA Virtual Account",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=MXhHnLsk&id=FBA5568E3E9F7528167F9206AEEB12EE4E32811F&thid=OIP.MXhHnLskaR27iN2Is7FvxwAAAA&mediaurl=https%3a%2f%2fwww.tanamduit.com%2fwp-content%2fuploads%2f2021%2f02%2flogo-oneklik.png&exph=105&expw=453&q=bca+oneklik+logo&simid=608002309707024261&FORM=IRPRST&ck=12EEDCE9C892C0A6F34C311167305561&selectedIndex=2",
    },
    {
      name: "BRIVA",
      image:
        "https://www.bing.com/ck/a?!&&p=15aa7601074a5564JmltdHM9MTY4MzQxNzYwMCZpZ3VpZD0yZmIxNjczOS0zNDJkLTYyYzQtMWI3ZC03NWQzMzU3YjYzOWYmaW5zaWQ9NTUxOA&ptn=3&hsh=3&fclid=2fb16739-342d-62c4-1b7d-75d3357b639f&u=a1L2ltYWdlcy9zZWFyY2g_cT1icml2YSBsb2dvJkZPUk09SVFGUkJBJmlkPTc0MDU4MjEwOEM4OTFEQTI2ODIxMEUwOTFENDQ2QTM1ODA5QUJBMDM&ntb=1",
    },
    {
      name: "Livin By Mandiri",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=BQmE7t5v&id=CAB36E58FEAF0043FAC739DDBAB97F2710F98811&thid=OIP.BQmE7t5v4XZL7uE88f1XeQHaEo&mediaurl=https%3a%2f%2fimages.bisnis-cdn.com%2fposts%2f2021%2f09%2f30%2f1448956%2flivin-mandiri-logo.jpg&exph=500&expw=800&q=livin+by+mandiri+logo&simid=607986246560607564&FORM=IRPRST&ck=5A048C9818E18AD4CD1EBAB985457941&selectedIndex=0",
    },
  ];
  const handleBayar = () => {
    navigate("/pembayaran", {
      state: { product, totalBelanja, totalEkspedisi, radio },
    });
  };
  const cancelButtonRef = useRef(null);

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
                  <div className="sm:flex sm:items-start">
                    <XMarkIcon
                      style={{ width: 30 }}
                      onClick={() => setOpen(false)}
                    />
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-semibold leading-6 text-gray-900"
                    >
                      Pembayaran
                    </Dialog.Title>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <p className="font-bold text-lg border-b">
                      Metode Pembayaran
                    </p>
                    {methodPayment.map((v, i) => (
                      <div key={i} className="justify-between flex py-2 ">
                        <p className="font-semibold">{v.name}</p>
                        <input
                          type="radio"
                          name="method"
                          id=""
                          onChange={(e) => setRadio(v)}
                          value={v}
                          className=""
                        />
                      </div>
                    ))}
                  </div>
                  <div className="py-4 border-t">
                    <h1 className="font-semibold">Ringkasan Pembayaran</h1>
                    <div className="justify-between flex">
                      <p>Total Belanja</p>
                      <p>{makeRupiahValue(totalBelanja)}</p>
                    </div>
                    <div className="justify-between flex">
                      <p>Diskon</p>
                      <p>- Rp0</p>
                    </div>
                    <div className="justify-between flex">
                      <p>Jasa Ekspedisi</p>
                      <p>{makeRupiahValue(totalEkspedisi * product.length)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-between sm:px-6">
                  <p className="font-semibold">
                    Total Tagihan{" "}
                    <p className="text-xl font-bold">
                      {" "}
                      {makeRupiahValue(totalBelanja + totalEkspedisi)}
                    </p>
                  </p>

                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-green-500 px-10 text-sm font-semibold text-white shadow-sm hover:bg-green-600 sm:ml-3 sm:w-auto"
                    onClick={handleBayar}
                  >
                    Bayar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
