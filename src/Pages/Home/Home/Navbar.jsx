import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "flowbite-react";
import Spinner from "../../Spinner/Spinner";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut,loading } = useContext(AuthContext);
  if(loading){
    return <Spinner></Spinner>
  }
  const handleLogout = () => {
    logOut();
  };

  return (
    <nav className="w-full bg-purple-500 shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link>
            <img src={'https://i.ibb.co/frHWShB/pngegg.png'} alt="" className='w-1/12' />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
                // className="w-6 h-6 text-white"
              >
                {navbar ? (
                  <HiX className="w-6 h-6 text-white"></HiX>
                ) : (
                  <HiMenuAlt1 className="w-6 h-6 text-white"></HiMenuAlt1>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white hover:text-indigo-200">
                <Link>Home</Link>
              </li>
              <li className="text-white hover:text-indigo-200">
                <Link to='/blog'>Blog</Link>
              </li>
              <ul className="lg:flex space-y-8 md:space-x-6 md:space-y-0 sm:block">
              {user ? (
              <>
                <li className="text-white hover:text-indigo-200"><Link to="/my_toys">
                  My Toys
                </Link></li>
                <li className="text-white hover:text-indigo-200"><Link  to="/add_toys">
                  Add Toys
                </Link></li>
              </>
            ) : (
              <></>
            )}
              </ul>
              <li className="text-white hover:text-indigo-200">
                <Link to='/all_toys'>All Toys</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              {/* <Link
                to="/login"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </Link>
              <Link className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                Sign up
              </Link> */}
              <div className="inline">
                {user ? (
                  <img
                  title={user.displayName}
                    // className="w-24 rounded-xl"
                    style={{ width: "25px", borderRadius: "99px" }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  <></>
                )}
              </div>

              <div>
                {user ? (
                  <div>
                    <Button className="btn btn-primary" onClick={handleLogout}>
                      Log Out
                    </Button>
                  </div>
                ) : (
                  <Link to="/login">
                    <Button className="btn btn-primary">Login</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block lg:flex items-center gap-1">
          {/* <Link to='/login' className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">
            Sign in
          </Link>
          <Link to='/register' className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
            Sign up
          </Link> */}
          <div>
            {user ? (
              <img
                // className="w-24 rounded-xl"
                style={{ width: "25px", borderRadius: "99px" }}
                src={user.photoURL}
                alt=""
              />
            ) : (
              <></>
            )}
          </div>

          <div>
            {user ? (
              <div>
                <Button className="btn btn-primary" onClick={handleLogout}>
                  Log Out
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button className="btn btn-primary">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
