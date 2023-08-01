
import { useLocation, useNavigate } from "react-router-dom";
import { addProduct } from "../../../config/redux/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AlertSuccess from "../../atoms/Alert/AlertSuccess";
import { setAlert } from "../../../config/redux/userSlice/userSlice";
import BreadCrumbs from "../../atoms/BreadCrumbs/BreadCrumbs";
import NavigationBar from "../../moleculs/NavigationBar/NavigationBar";
import { makeRupiahValue } from "../../../config/helper/helperMethod";

export default function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;
  const productCart = useSelector((state) => state.product);
  const dispatch = useDispatch();
  

  const addToShoppingCart = () => {
    const result = productCart.find(
      (productFilter) => product.id === productFilter.id
    );
    if (result) {
      dispatch(setAlert("sudah"));
    } else {
      dispatch(setAlert("keranjang"));
      dispatch(addProduct({ ...product, qty: 1, expedition: "" }));
    }
  };

  const addToShipment = () => {
    navigate("/cart/shipment", {
      state: [{ ...product, qty: 1 }],
    });
  };

  return (
    <>
      <NavigationBar />
      <BreadCrumbs name={product.productName} />
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 m-12 sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover object-center"
          />
        </div>
        <div className="py-5 sm:col-span-8 lg:col-span-7">
          <AlertSuccess />
          <h2 className="text-xl font-bold  text-gray-900 sm:pr-12">
            {product.productName}
          </h2>
          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>
            <p>Rating {product.rating} ⭐</p>
            <p className="text-4xl font-bold my-2 text-gray-900">
              {makeRupiahValue(product.productPrice)}
            </p>
            <div className="relative inline-flex">
              <p className="bg-red-300  text-sm text-red-600 p-1 mx-2">50%</p>
              <p className=" text-lg text-gray-500 line-through ">
                {makeRupiahValue(product.productPrice * 2)}
              </p>
            </div>
          </section>
          <button
            onClick={addToShoppingCart}
            className="block bg-green-500 text-white px-14 py-3 my-7 font-bold rounded-lg"
          >
            + Keranjang
          </button>
          <button
            onClick={addToShipment}
            className="border border-green-500 px-12 py-3 font-bold text-green-500 rounded-lg"
          >
            Beli langsung
          </button>
        </div>
      </div>
    </>
  );
}
