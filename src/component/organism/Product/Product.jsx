import React from "react";
import Pagination from "../../atoms/Pagination/Pagination";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import { useSelector } from "react-redux";
import NavigationBar from "../../moleculs/NavigationBar/NavigationBar";
import { makeRupiahValue } from "../../../config/helper/helperMethod";

function Product() {
  const navigate = useNavigate();
  const pg = useSelector((state) => state.user.pagination);
  const pagination = 8 * pg;
  const GET_PRODUCTS = gql`
    query MyQuery($pagination: Int!) {
      product(limit: 8, offset: $pagination) {
        id
        imageSrc
        productName
        productPrice
        productCategory
        rating
      }
    }
  `;
  const { loading, data: getAllProduct } = useQuery(GET_PRODUCTS, {
    variables: { pagination },
  });


  const getDetail = (params) => {
    navigate(`/productDetail/${params.id}`, {
      state: {
        product: params,
      },
    });
  };
  return (
    <>
      <NavigationBar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-8 sm:py-8 lg:max-w-7xl lg:px-12">
          <div>
            <h2 className="font-bold text-2xl">Products</h2>
            {loading && <ClockLoader />}
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {getAllProduct?.product.map((product) => (
              <a
                key={product.id}
                onClick={() => getDetail(product)}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-52 w-full object-cover object-center max-h-sm group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-md text-gray-700">
                  {product.productName}
                </h3>
                <p className="text-sm">{product.productCategory}</p>
                <p className="mt-1 text-lg  text-gray-900 font-bold">
                  {makeRupiahValue(product.productPrice)}
                </p>
                <p>⭐ {product.rating}</p>
              </a>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default Product;
