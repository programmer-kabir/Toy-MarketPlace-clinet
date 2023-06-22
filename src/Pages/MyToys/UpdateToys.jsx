import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToys = () => {
  const loadedToys = useLoaderData();
  // console.log(loadedToys);

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const SubCategory = form.SubCategory.value;
    const Price = form.Price.value;
    const Rating = form.Rating.value;
    const Quantity = form.quantity.value;
    const Description = form.description.value;
    const Photo = form.photo.value;
    const updateUser = {
      name,
      sellerName,
      sellerEmail,
      SubCategory,
      Price,
      Rating,
      Quantity,
      Description,
      Photo,
    };

    fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/${loadedToys._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Yah!", "Toy Data Update successfully", "success");
        }
      });
  };

  return (
    <div className="px-16 mx-auto">
      <form onSubmit={handleUpdateToy} className="flex flex-col gap-4 my-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="mb-2 block">
              <Label value="Toy name" />
            </div>
            <TextInput
              type="text"
              name="name"
              defaultValue={loadedToys?.name}
              placeholder="name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Seller name" />
            </div>
            <TextInput
              type="text"
              defaultValue={loadedToys?.sellerName}
              name="sellerName"
              placeholder="Seller name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Seller email" />
            </div>
            <TextInput
              type="text"
              name="sellerEmail"
              defaultValue={loadedToys?.sellerEmail}
              placeholder="Seller email"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Sub-category" />
            </div>
            <TextInput
              type="category"
              name="SubCategory"
              defaultValue={loadedToys?.SubCategory}
              placeholder="Sub-category"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Price" />
            </div>
            <TextInput
              type="text"
              defaultValue={loadedToys?.Price}
              name="Price"
              placeholder="Price"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Rating" />
            </div>
            <TextInput
              type="text"
              name="Rating"
              defaultValue={loadedToys?.Rating}
              placeholder="Rating"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Available quantity" />
            </div>
            <TextInput
              type="text"
              name="quantity"
              defaultValue={loadedToys?.Quantity}
              placeholder="Available quantity"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label value="Details description" />
            </div>
            <TextInput
              type="text"
              name="description"
              defaultValue={loadedToys?.Description}
              placeholder="Details description"
              required={true}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Photo" />
          </div>
          <TextInput
            type="text"
            name="photo"
            defaultValue={loadedToys?.Photo}
            placeholder="Your Photo url"
            required={true}
          />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default UpdateToys;
