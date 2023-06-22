import { Button, Label, TextInput } from "flowbite-react";
import Lottie from "lottie-react";
import login from "./Login.json";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const { SingIn, googleNewUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/';
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    SingIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        Swal.fire(
          'Yah!',
          'Login in Success ',
          'success'
        )
        form.reset();
        navigate(from)
      })
      .catch((error) => {
        console.log(error.message);

      });
  };

  const googleNewUserL = () => {
    googleNewUser()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const loggedUser = result.user;
        // console.log(loggedUser);
        // ...
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">Please Login</h2>
      <div className="md:flex items-center">
        <div className="md:w-1/2">
          <Lottie animationData={login}></Lottie>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 md:w-1/2">
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

          <Button type="submit">Login</Button>
          <div className="text-center ">
            <p>or</p>
            <Link to='/register'><Button className="mx-auto text-blue-500">Crete New User</Button></Link>
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
    </div>
  );
};

export default Login;
