import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { addRequestApi, getAllBloodRequestApi } from "../services/allApi";
import { all } from "axios";
import { useNavigate } from "react-router-dom";
const Requests = () => {
  const [request, setRequest] = useState({
    bloodGroup: "",
    units: "",
    place: "",
    pname: "",
    phone: "",
  });

  const [validMobileNumber, setValidMobileNumber] = useState(false);
  const [validBloodUnits, setValidBloodUnits] = useState(false);
  const [phoneLength, setphoneLength] = useState(false);
  const [allBloodRequest, setAllBloodRequest] = useState([]);
  
  const target = useRef(null)

  useEffect(() => {
    if (request.phone.match(/^[0-9]{10}$/g)) {
      setValidMobileNumber(true);
    } else {
      setValidMobileNumber(false);
    }

    const phoneNumberLength = request.phone.length;

    if (phoneNumberLength == 10) {
      setphoneLength(true);
    } else {
      setphoneLength(false);
    }

    if (request.units.match(/^[0-9]/g)) {
      setValidBloodUnits(true);
    } else {
      setValidBloodUnits(false);
    }
  }, [request.units, request.phone]);

  useEffect(() => {
    getAllBloodRequest();
  }, []);

  const handleAddReqest = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const { bloodGroup, units, place, pname, phone } = request;
    if (bloodGroup && units && place && pname && phone) {

      console.log(request);
      if (token) {
        try {
          const reqHeader = {
            "Authorization": `Bearer ${token}`,
          };

          const result = await addRequestApi(request, reqHeader);
          console.log(result);

          if (result.request.status == 201) {
            alert("request added successfully");
            console.log(result);
            getAllBloodRequest();
            target.current.scrollIntoView({ behavior: "smooth" })
            
          } else {
            if (result.status == 400) {
              console.log(result.data.message);
            }
          }
        } catch (error) {
          console.log(error.message);
        }
      } else {
        alert("please fill the form completly");
      }
    }
  };

  const getAllBloodRequest = async () => {
    try {
      const result = await getAllBloodRequestApi();
      // console.log(result.data);
      const BloodRequestData = result?.data;
      // console.log(BloodRequestData);
      if (result.status == 200) {
        await setAllBloodRequest(BloodRequestData.reverse());
        console.log("hello");
      } else {
        console.log(result.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(allBloodRequest);
  allBloodRequest.map((request,index) =>console.log(request,index))

  return (
    <>
      <Header isLogedIn={sessionStorage.getItem("token")} />
      <div className="md:px-5 md:mt-30 mt-20 ">
        <h1 ref={target} id="urgent-req" className="text-center text-2xl md:text-3xl mb-10 font-bold ">
          Urgent Requirement
        </h1>

        <div className=" grid grid-cols-1 gap-3 md:grid-cols-4 justify-items-center ">
          {allBloodRequest.map((request) => (
            <div className=" animate__animated animate__fadeInUp ">
              {/* card */}

              <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                <h1 className="font-bold text-lg">{request.bloodGroup} Blood Required</h1>
                <h5 className="font-bold ">
                  <span className="opacity-40">Need: </span> {request.units} Units
                </h5>
                <h5 className="font-bold ">
                  <span className="opacity-40">Place: </span>{request.place}
                </h5>
                <h5 className="font-bold ">
                  <span className="opacity-40">Name: </span>{request.pname}
                </h5>
                <h5 className="font-bold ">
                  <span className="opacity-40">Phone: </span> {request.phone}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* add request */}
        {sessionStorage.getItem("token") && (
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
                    onChange={(e) =>
                      setRequest({ ...request, bloodGroup: e.target.value })
                    }
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
                    {!validBloodUnits && (
                      <span className="text-red-800 ml-10">
                        Please enter digit
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    onChange={(e) =>
                      setRequest({ ...request, units: e.target.value })
                    }
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
                    onChange={(e) =>
                      setRequest({ ...request, place: e.target.value })
                    }
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
                    onChange={(e) =>
                      setRequest({ ...request, pname: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

                <div className="mb-5">
                  <label
                    for="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact
                    {!validMobileNumber && (
                      <span className="ml-10 text-red-800">
                        Please enter a valid number
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    onChange={(e) =>
                      setRequest({ ...request, phone: e.target.value })
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  disabled={!phoneLength}
                  onClick={handleAddReqest}
                  className="bg-red-700 w-full p-2 rounded-md text-white hover:bg-red-600 disabled:bg-red-300"
                >
                  Add Request
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Requests;
