import { Button } from "flowbite-react";
import React from "react";
import Swal from "sweetalert2";

const Gallery = () => {
  const handleAddToCart = () => {
    Swal.fire("Yah!", "Your Product Add to Cart Successfully!", "success");
  };
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-5 container mx-auto">
        Toy Sports Car Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center border-2 gap-4">
        <div className="border py-6 px-2">
          <img
            src={
              "https://m.media-amazon.com/images/I/51V9X3Odb0L._AC_UL400_.jpg"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">Plastic Robotic Sports Race Ca</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border py-20 px-2 ">
          <img
            className=""
            src={
              "https://m.media-amazon.com/images/I/61xVEBqlE7L._AC_UL400_.jpg"
            }
            alt=""
          />

          <h5 className="font-medium mb-3">Radio Remote Control</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border px-2 py-14">
          <img
            className=""
            src={
              "https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/640w/products/6849/28384/34526-sho-gray-2019-bugatti-divo-diecast-toy-car-1__27121.1606864572.jpg?c=1"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">New Arrival Toy Diecast</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border px-2">
          <img
            className=" "
            src={
              "https://media.prod.bunnings.com.au/api/public/content/05fd20590eac48d6ad27f8a8049471ec?v=03fd7a57&t=w500dpr1"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">New lambor Toy Diecast</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border px-2">
          <img
            className=""
            src={
              "https://www.littleriders.com.au/assets/full/DK-M720S-PP.jpg?20230419134613"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">Assembled Version Maisto</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border px-1 py-10">
          <img
            
            src={
              "https://m.media-amazon.com/images/I/41vA52C+0nL._AC_UL400_.jpg"
            }

            alt="  "
          />
          <h5 className="font-medium mb-3">Bugatti Veyron Diecast Cars</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className="border px-1 py-10">
          <img
            
            src={
              "https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/640w/products/6851/28388/34523-sho-yellow-2018-porsche-911-gt2-rs-diecast-toy-car-1__83715.1606864583.jpg?c=1"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">Bugatti Black Dragon Supercar Diecast</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
        <div className=" px-1 py-10">
          <img
            src={
              "https://cdn11.bigcommerce.com/s-rejby4tfjq/images/stencil/640w/products/6849/28384/34526-sho-gray-2019-bugatti-divo-diecast-toy-car-1__27121.1606864572.jpg?c=1"
            }
            alt=""
          />
          <h5 className="font-medium mb-3">Veyron Diecast Cars</h5>
          <Button className="mx-auto mb-2" onClick={handleAddToCart}>
            {" "}
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
