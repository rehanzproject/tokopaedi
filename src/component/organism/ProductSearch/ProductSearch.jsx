import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ClockLoader } from "react-spinners";
import NavigationBar from "../../moleculs/NavigationBar/NavigationBar";

function ProductSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;
  var product = search.replace("?pn=", "");
  var productName = product.replace("+", " ");

  const [productCategory, setProductCategory] = useState("");
  const GET_PRODUCTS_BY_SEARCH = gql`
    query MyQuery($productName: String!) {
      product(where: { productName: { _iregex: $productName } }) {
        id
        imageSrc
        productCategory
        productName
        productPrice
        rating
      }
    }
  `;

  const {
    error,
    loading,
    data: dataFilter,
  } = useQuery(GET_PRODUCTS_BY_SEARCH, {
    variables: { productName },
  });

  const GET_PRODUCTS_BY_CATEGORY = gql`
    query MyQuery($productCategory: String!) {
      product(where: { productCategory: { _eq: $productCategory } }) {
        id
        imageSrc
        productCategory
        productName
        productPrice
        rating
      }
    }
  `;

  const { data: dataFilterByCategory } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { productCategory },
  });
  const [isData, setData] = useState(false);
  const data = productCategory !== "" ? dataFilterByCategory : dataFilter;

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
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-12">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl">Products</h2>
            {loading && <ClockLoader />}
            <h2 className="font-semibold">
              Urutkan Berdasarkan Kategori:{" "}
              <select
                name=""
                id=""
                onChange={(e) => setProductCategory(e.target.value)}
                className="p-2 border rounded-full"
              >
                <option value="">Pilih</option>
                <option value="Sport">Sport</option>
                <option value="School">School</option>
                <option value="Fashion">Fashion</option>
              </select>
            </h2>
          </div>
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data?.product.map((product) => (
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
                  Rp{product.productPrice}
                </p>
                <p>⭐ {product.rating}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearch;
