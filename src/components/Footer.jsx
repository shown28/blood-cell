import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        style={{ marginTop: "100px" }}
        className="bg-gray-600 flex-col md:flex-row  text-white px-3 py-10 flex justify-between">
        
        <div className="md:w-1/4 mb-4 ">
          <h1 className="font-bold text-xl mb-1">
          <i className="fa-solid fa-droplet text-red-700"></i> Blood Cell
          </h1>
          <br />
        
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              commodi, quisquam animi, exercitationem dolorem tenetur nobis
              blanditiis ea voluptatem cupiditate labore placeat sunt, ab vitae
              molestias nemo eaque necessitatibus. Omnis?
              <br /> <br />
              Current Version v5.3
          
        </div>

        <div className="mb-4">
          <h1 className="font-bold text-xl md:mb-2 ">Links</h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            
          </ul>
        </div>
        <div className="mb-4">
          <h1 className="font-bold text-xl md:mb-2">Guides</h1>
          <h5>React</h5>
          <h5>Tailwind</h5>
          <h5>React Router </h5>
        </div>

        <div>
          <h1 className="font-bold text-xl mb-2">Contact</h1>
          <input
            type="text"
            placeholder="enter your email"
            className="rounded pl-3 mb-4"
          />
          <ul className="flex justify-between">
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
