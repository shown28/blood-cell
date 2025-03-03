import React, { useState } from "react";

const Requests = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  console.log(bloodGroup);

  return (
    <>
      <div className="md:px-5 md:mt-30 mt-20">
        <h1 className="text-center text-2xl md:text-3xl mb-10 font-bold ">
          Urgent Requirement
        </h1>

        <div className=" grid grid-cols-1 gap-3 md:grid-cols-4 justify-items-center ">
          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>

          <div className="  ">
            {/* card */}

            <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
              <h1 className="font-bold text-lg">A+ Blood Required</h1>
              <h5 className="font-bold ">
                <span className="opacity-40">Need:</span> 2 Units
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Place:</span>Govt Hospital
                Ernakulam
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Name:</span>Manu Antony
              </h5>
              <h5 className="font-bold ">
                <span className="opacity-40">Phone:</span> 1234567890
              </h5>
            </div>

            {/* <div className='urgentRequire rounded shadow px-5 py-6 bg-stone-100 '>
                <h1 className='font-bold text-lg'>A+ Blood Required</h1>
                <h5 className='font-bold '><span className='opacity-40'>Need:</span> 2 Units</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Place:</span>Govt Hospital Ernakulam</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Name:</span>Manu Antony</h5>
                <h5 className='font-bold '><span  className='opacity-40'>Phone:</span> 1234567890</h5>
                 
                
            </div> */}
          </div>
        </div>

        {/* add request */}

        <div>
          <h1 className="my-10 font-bold text-2xl">Add your request</h1>
          {/* form */}
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Blood Group
                </label>
                <select
                  onChange={(e) => setBloodGroup(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                >
                  <option value={"select"}>select</option>
                  <option value={"A+"}>A+</option>
                  <option value={"B+"}>B+</option>
                  <option value={"O+"}>O+</option>
                  <option value={"AB+"}>AB+</option>
                </select>
              </div>

              <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Number of units needed
                  <span className="text-red-800 ml-10">Please enter digit</span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Hospital Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Patient Name
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>

              <div className="mb-5">
                <label
                  for="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contact
                  <span className="ml-10 text-red-800">
                    Please enter a valid number
                  </span>
                </label>
                <input
                  type="text"
                  id="base-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requests;
