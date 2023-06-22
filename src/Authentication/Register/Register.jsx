import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import Lottie from "lottie-react";
import register from "./Register.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser, googleNewUser, update} = useContext(AuthContext)
  const handelRegister = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const photo = from.photo.value;
    // console.log(name, email,password, photo);
    createUser(email, password)
    .then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      update(result.user, name, photo)
          .then()
          .catch((error) => console.log(error));
    })
    Swal.fire(
      'Yah!',
      'Register in Successfully ',
      'success'
    )
    .catch((error) => {
      console.log(error);
    });

  }

  const googleNewUserL = () => {
    googleNewUser()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const loggedUser = result.user;
        console.log(loggedUser);
        // ...
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="md:flex items-center -mt-5">
      <div className="md:w-1/2">
        <Lottie animationData={register}></Lottie>
      </div>
      <form onSubmit={handelRegister} className="flex flex-col gap-4 md:w-1/2">
      <div>
        <div className="mb-2 block">
          <Label value="Your Name" />
        </div>
        <TextInput
        name="name"
        placeholder="Your Name Here"
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
        />
      </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            name="email"
            id="email2"
            type="email"
            placeholder="name@gmail.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            name="password"
            id="password2"
            placeholder="******"
            type="password"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label value="Your password" />
          </div>
          <TextInput
            name="photo"
            placeholder="Your Photo Url Link"
            type="text"
            required={true}
            shadow={true}
          />
        </div>
        <Button type="submit">Register new account</Button>
        <div className="text-center ">
            <p>or</p>
            <Link to='/login'><Button className="mx-auto text-blue-500">Please Login</Button></Link>
            <Button
              onClick={() => googleNewUserL()}
              className="mt-5 w-1/2 bg-orange-400 mx-auto"
              type="submit"
            >
              <FaGoogle className="mr-5"></FaGoogle>
              Google Register
            </Button>
            
          </div>
      </form>
    </div>
  );
};

export default Register;
