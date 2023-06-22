import { Button, Tabs } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import SubCategory from "../SubCategory/SubCategory";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Spinner from "../../Spinner/Spinner";


const ReactTabs = () => {
  const {loading} = useContext(AuthContext)
  if(loading){
    return <Spinner></Spinner>
  }
  const [toys, setToys] = useState([]);
  const [active , setActive] = useState('sports car');
  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/toy/${active}`)
      .then((res) => res.json())
      .then((Data) => setToys(Data));
  }, [active]);

  const handleAddClick = (tabName) =>{
    setActive(tabName);
  }

  
  return (
    <div className="mt-16 text-center justify-center mx-auto">
      <Button.Group  className="mx-auto justify-center">
    <Button  gradientMonochrome="info" onClick={()=>{handleAddClick('sports car')}}>
    Sports Car
    </Button >
    <Button gradientMonochrome="info" onClick={()=>{handleAddClick('truck')}}>
    Truck
    </Button>
    <Button gradientMonochrome="info" onClick={()=>{handleAddClick('mini police car')}}>
    Mini Police Car
    </Button>
  </Button.Group>
  <div className="grid md:grid-cols-3 gap-3 mx-9 mt-3">
    {
      toys.map(toy =><SubCategory toy={toy} key={toy._id}></SubCategory>)
    }
  </div>
    </div>
  );
};

export default ReactTabs;
