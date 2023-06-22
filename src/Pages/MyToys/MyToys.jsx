import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button, Table } from "flowbite-react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";

const MyToys = () => {
  const LoadedToys = useLoaderData();
  const { user } = useContext(AuthContext);
  const [selectedToys, setSelectedToys] = useState([]);
  const [toys, setToys] = useState(LoadedToys);

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);
  console.log(user);
  const handleDelete = (id) => {
    // console.log("object");
    const proceed = confirm("are you sure");
    if (proceed) {
      fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = toys.filter((toy) => toy._id !== id);
          setToys(remaining);
          Swal.fire("Yah!", "Delete!", "success"); 
        });
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Toy Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Seller Name</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Details</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="">
          {toys.map((toy) => (
            //   <Toys toy={toy} key={toy._id}></Toys>
            <>
              <Table.Row key={toy._id}>
                
                {/* <Table.Cell></Table.Cell> */}
                <Table.Cell>{toy.name}</Table.Cell>
                <Table.Cell>{toy.SubCategory}</Table.Cell>
                <Table.Cell>{toy.sellerName}</Table.Cell>
                <Table.Cell>{toy.Price}</Table.Cell>
                <Table.Cell>{toy.Quantity}</Table.Cell>
                <Table.Cell>
                  <Link to={`/toyDetails/${toy._id}`}>
                    <Button>View Details</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-1 items-center">
                    <Link to={`/update/${toy._id}`}>
                      <HiOutlinePencilAlt className="w-6 h-6" />
                    </Link>
                    <HiOutlineTrash
                      onClick={() => handleDelete(toy._id)}
                      className="w-6 h-6"
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            </>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MyToys;
