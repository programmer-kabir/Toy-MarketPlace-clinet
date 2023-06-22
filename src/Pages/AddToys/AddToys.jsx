import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToys = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
    const handleAddToy = event =>{
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

        const addToy = {name, sellerName, sellerEmail, SubCategory, Price, Rating, Quantity, Description, Photo}
        // console.log(addToy);
        

        fetch('https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          Swal.fire(
            'Yah!',
            'Toy added successfully',
            'success'
          )
          
          form.reset()
          navigate('/my_toys')
        })
    }


  return (
    <div className="mx-6">
      <form onSubmit={handleAddToy} className="flex flex-col gap-4 my-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <div className="mb-2 block">
              <Label value="Toy name" />
            </div>
            <TextInput
              type="text"
              name="name"
              // defaultValue={user?.displayName}
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
              defaultValue={user?.email}
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
            placeholder="Your Photo url"
            required={true}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddToys;
