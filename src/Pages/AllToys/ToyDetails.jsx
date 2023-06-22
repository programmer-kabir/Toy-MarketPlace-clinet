import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = ({ toyy }) => {
  const toys = useLoaderData();
  console.log(toys);
  const {
    Photo,
    Price,
    name,
    Quantity,
    Rating,
    SubCategory,
    sellerName,
    Description,
    sellerEmail,
  } = toys;
  // const { image, sellerName, name, price, rating, quantity } = toys
  return (
    <div>
      <div className="mx-auto text-center w-1/2 ">
        <Card>
        <img Src={Photo}  className="w-1/5 mx-auto"/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name:{name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Category:{SubCategory}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {Description}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Price:{Price}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Quantity:{Quantity}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Rating:{Rating}
          </p>
          <div className="flex justify-between">
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Seller Email:{sellerEmail}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Seller Name:{sellerName}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ToyDetails;
