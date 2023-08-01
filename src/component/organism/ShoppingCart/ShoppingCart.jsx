import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQtyMinus,
  changeQtyPlus,
  removeProduct,
} from "../../../config/redux/productSlice/productSlice";
import { MinusCircleIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import AlertSuccess from "../../atoms/Alert/AlertSuccess";
import { setAlert } from "../../../config/redux/userSlice/userSlice";
import NavbarLogo from "../../moleculs/NavbarLogo/NavbarLogo";
import { makeRupiahValue } from "../../../config/helper/helperMethod";

export default function ShoppingCart() {
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
  const handleCheck = (product) => {
    const x = clicked.find((value) => value.id == product.id);
    // if product not found on cart, then add to array
    if (!x) {
      setClicked((prev) => [...prev, product]);
      // if found , delete product
    } else {
      setClicked(clicked.filter((v) => v.id !== product.id));
    }
  };

  const handleTrash = (i) => {
    dispatch(setAlert("hapus"));
    dispatch(removeProduct(i));
  };

  const handleMinus = (product) => {
    if (product.qty >= 2) {
      dispatch(changeQtyMinus(product));
    }
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
              <li key={product.id} className="flex py-6">
                <input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  className="m-3 w-5 "
                  onChange={() => handleCheck(product)}
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
                      <h3>{product.productName}</h3>
                    </div>
                    <p>{product.productCategory}</p>
                    <p className="mt-1 text-lg font-bold">
                      {makeRupiahValue(product.productPrice)}
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
                          onClick={() => handleMinus(product)}
                        />
                      </button>

                      <p className="text-2xl">{product.qty}</p>
                      <button disabled={true}>
                        <PlusCircleIcon
                          className="w-8 mx-5 text-green-500"
                          onClick={() => dispatch(changeQtyPlus(product))}
                        />
                      </button>
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
          <p className="font-bold">{makeRupiahValue(totalBarang)}</p>
        </div>
        <div className="border-t py-2 flex justify-between font-bold text-xl">
          <p>Total Tagihan</p>
          <p>{makeRupiahValue(totalBarang)}</p>
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
