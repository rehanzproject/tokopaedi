import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../../config/redux/productSlice/productSlice";
import { MinusCircleIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import AlertSuccess from "../../atoms/Alert/AlertSuccess";
import { setAlert } from "../../../config/redux/userSlice/userSlice";
import NavbarLogo from "../../moleculs/NavbarLogo/NavbarLogo";

export default function ShoppingCart() {
  const [checked, setChecked] = useState(false);
  const [clicked, setClicked] = useState([]);
  const navigate = useNavigate();
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const totalCheckout = products.reduce(
    (accumulator, currentValue) => currentValue.productPrice + accumulator,
    0
  );
   const totalBarang = clicked.reduce((v, i) => i.productPrice + v, 0);
  const handleClickCheckout = () => {
    navigate("/cart/shipment", {
      state: clicked,
    });
  };

  const handleCheck = (e, product) => {
    setChecked(e.target.checked);
    setClicked((clicked) => [...clicked, product]);
    if (products[0].id === clicked[0]["id"]) {
      setClicked([]);
    } else {
      console.log("p")
    }
  };
  const handleTrash = (i) => {
    dispatch(setAlert("hapus"));
    dispatch(removeProduct(i));
  };

  return (
    <>
      <NavbarLogo />
      <h1 className="font-medium text-2xl px-24 py-4">Keranjang</h1>
      <div className="px-16 py-2">
        <AlertSuccess />
      </div>
      <div className="max-w-4xl px-5">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {products.map((product, i) => (
              <li key={i} className="flex py-6">
                <input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  className="m-3 w-5 "
                  onChange={(e) => handleCheck(e, product)}
                  value={product}
                />
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col max-w-2xl">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={product.href}>{product.productName}</a>
                      </h3>
                    </div>
                    <p>{product.productCategory}</p>
                    <p className="mt-1 text-lg font-bold">
                      Rp{product.productPrice.toLocaleString()}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">{product.quantity}</p>
                    <a href="#" className="text-gray-500 pl-60">
                      Pindahkan Ke Wishlist
                    </a>
                    <TrashIcon
                      className="w-16 text-gray-500 px-4 border-l-2"
                      onClick={() => handleTrash(i)}
                    />

                    <div className="flex">
                      <button disabled={true}>
                        <MinusCircleIcon
                          className="w-8 mx-5 text-green-500"
                          disabled={true}
                          onClick={() => (product["qty"] -= 1)}
                        />
                      </button>

                      <p className="text-2xl">{product.qty}</p>
                      <PlusCircleIcon
                        className="w-8 mx-5 text-green-500"
                        onClick={() => (product["qty"] += 1)}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border rounded-md shadow-lg w-80 fixed inset-y-0 right-0 m-24 border-gray-200 px-4 py-6 ">
        <div className=" text-base  py-3 font-medium text-gray-900">
          <p>Ringkasan Belanja</p>
        </div>
        <div className="flex py-2 text-gray-500 justify-between ">
          <p>Total Harga({clicked.length} Barang) </p>
          <p className="font-bold">Rp{totalBarang}</p>
        </div>
        <div className="border-t py-2 flex justify-between font-bold text-xl">
          <p>Total Tagihan</p>
          <p>Rp{totalBarang}</p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleClickCheckout}
            disabled={clicked.length > 0 ? false : true}
            className={`w-full text-center  rounded-md bg-${
              clicked.length == 0 ? "gray-100" : "green-500"
            } px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-${
              clicked.length == 0 ? "gray-100" : "green-600"
            }-600`}
          >
            Beli({clicked.length})
          </button>
        </div>
        <div className="mt-6  justify-center text-center text-sm text-gray-500">
          <p>
            atau
            <button
              type="button"
              className="font-medium text-green-600 mx-2"
              onClick={() => navigate("/product")}
            >
              Kembali Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
