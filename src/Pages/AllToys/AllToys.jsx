import { Button, Card, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ToyDetails from "./ToyDetails";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const LoadedToys = useLoaderData()
  const [toyss, setToy] = useState(LoadedToys);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, [user]);


  // console.log(toys);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleDetils = id =>{
    console.log(id);
    
  }

  return (
    <div className="px-16 mx-auto">
        
      <div>
        <Table>
          <Table.Head>
            <Table.HeadCell>Toy Name</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Seller Name</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Details</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="">
            {toys.map((toy) => (
              //   <Toys toy={toy} key={toy._id}></Toys>
              <>
                <Table.Row key={toy._id}>
                  <Table.Cell>{toy.name}</Table.Cell>
                  <Table.Cell>{toy.category_id}</Table.Cell>
                  <Table.Cell>{toy.sellerName}</Table.Cell>
                  <Table.Cell>{toy.price}</Table.Cell>
                  <Table.Cell>{toy.quantity}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/allDetails/${toy._id}`}>
                    <Button>Details</Button>
    
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </>
            ))}
            {toyss.map((toyy) => (
              //   <Toys toy={toy} key={toy._id}></Toys>
              <>
              
                <Table.Row key={toyy.id}>
                  <Table.Cell>{toyy.name}</Table.Cell>
                  <Table.Cell>{toyy.SubCategory}</Table.Cell>
                  <Table.Cell>{toyy.sellerName}</Table.Cell>
                  <Table.Cell>{toyy.Price}</Table.Cell>
                  <Table.Cell>{toyy.Quantity}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/toyDetails/${toyy._id}`}>
                    <Button>Details</Button>
                    
                    </Link>
                  </Table.Cell>
                </Table.Row>
              </>
            ))}
          </Table.Body>
        </Table>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="">
            <Card imgSrc={toy.image}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name:{toy.name}
              </h5>
              <div className="flex justify-between">
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  Price:{toy.price}
                </h5>
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  Ratting:{toy.rating}
                </h5>
                <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                  Quantity:{toy.quantity}
                </h5>
              </div>
            </Card>
          </div>
        </div>

        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <button onClick={closeModal}>close</button>
      </Modal> */}
    </div>
  );
};

export default AllToys;
