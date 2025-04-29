import React, { useEffect } from "react";
import { useState } from "react";
import bloodDrop from "../images/bloodDrop.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { button } from "@material-tailwind/react";

const Header = ({ isLogedIn }) => {
  const [isOpen, setisOpen] = useState(false);
  const user = true;
  const navigate = useNavigate();

  const handleLogOut = () => {
    try{
        sessionStorage.clear()
        navigate("/login")
    }
    catch(err){
      console.log(err.message)
    }
  };

  const show = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full items-center justify-center flex-col fixed top-2 z-20">
        <div className="flex bg-stone-100 items-center justify-center px-10 rounded-3xl border border-gray-400">
          <div className="flex items-center">
            {/* logo */}
            <div className="w-12   mr-28 flex ">
              <img className="w-full" src={bloodDrop} alt="" />

              {/* <h1 className="invisible md:visible bg-red-100 w-full">
                Blood Cell
              </h1> */}
            </div>

            {/* links  */}
            <div className="navLink">
              <ul className="flex font-medium">
                <li className="mr-3 border-current hover:text-red-700">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="mr-3 hover:text-red-700">
                  <Link to={"/requests"}>Requests</Link>
                </li>
                <li className="mr-3 hover:text-red-700">
                  <Link to={"/voluntary-donors"}>Voluntary Donors</Link>
                </li>
                {isLogedIn && (
                  <li className="mr-3 hover:text-red-700">
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            {isLogedIn ? (
              <button onClick={handleLogOut} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Log out
              </button>
            ) : (
              <Link
                to={"/login"}
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Login
              </Link>
            )}

            <button
              onClick={show}
              className="menu border rounded py-1 ml-2 px-2"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        {isOpen && (
          /* link for mobile */

          <div className="mobileNavLink w-full  left-0 bg-white shadow absolute top-0 px-2 py-2">
            <div className="flex w-full justify-between items-center rounded bg-stone-100 p-2">
              {/* logo */}
              <div className="w-12  flex">
                <img className="w-full" src={bloodDrop} alt="" />
              </div>
              <span className="font-bold text-xl">Blood Cell</span>
              <button onClick={show} className="menu border rounded px-2 ">
                <i class="fa-solid fa-x"></i>
              </button>
            </div>
            <ul className="flex flex-col content-start">
              <li className=" my-3 border-current hover:text-red-700">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="my-3 border-current hover:text-red-700">
                <Link to={"/requests"}>Requests</Link>
              </li>
              <li className="my-3 border-current hover:text-red-700">
                <Link to={"/voluntary-donors"}>Voluntary Donors</Link>
              </li>
              {
                isLogedIn &&
                <li className="my-3 border-current hover:text-red-700">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              }
              
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
