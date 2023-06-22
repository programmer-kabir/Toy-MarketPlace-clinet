import { Card } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const AllDetails = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  const {
    image,
    price,
    name,
    quantity,
    rating,
    category_id,
    sellerName,
  } = allToys;
  return <div>
    <div className="mx-auto text-center w-1/2 ">
        <Card>
        <img Src={image}  className="w-1/5 mx-auto"/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name:{name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Category:{category_id}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
              Seller Name:{sellerName}
            </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Quantity:{quantity}
          </p>
          <div className="flex justify-between">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Price:{price}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Rating:{rating}
          </p>
          </div>
            
        </Card>
      </div>
  </div>;
};

export default AllDetails;
