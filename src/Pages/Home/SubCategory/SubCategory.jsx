import { Button, Card } from "flowbite-react";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SubCategory = ({ toy }) => {
  // console.log(toy);
  const { name, image, price, rating } = toy
  return (
    <div className="">
      <div className="max-w-sm">
        <Card imgSrc={image}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <div className="flex justify-between">
          <p className="font-semibold text-gray-700 text-xl dark:text-gray-400">
            Price:{price}
            </p>
          <p className="font-semibold text-gray-700 text-xl dark:text-gray-400">
            Ratting:{rating}
            </p>
          </div>
          <Button>View Details</Button>
        </Card>
      </div>
    </div>
  );
};

export default SubCategory;
