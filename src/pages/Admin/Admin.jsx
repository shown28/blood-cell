import React, { useEffect, useState } from "react";
import {
  authorizedUserApi,
  getAllUserApi,
  userAuthorisationApi,
} from "../../services/allApi";
import { button } from "@material-tailwind/react";

const Admin = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUser();
  }, []);

  const userAuthorisation = async (id) => {
    const token = sessionStorage.getItem("token");

    alert("Approve as Authorise donor");
    try {
      const reqHeader = {
        Authorization: `Beare ${token}`,
      };
      const result = await userAuthorisationApi(id, reqHeader);
      if (result.status == 200) {
        getAllUser();
        // setAllUsers(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllUser = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      const result = await getAllUserApi(reqHeader);
      if (result.status == 200) {
        setAllUsers(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(allUsers);

  return (
    <>
      <div className="container">
        <h1 className="bg-red-600 text-3xl font-bold p-10 text-white">
          Admin Panel
        </h1>

        <h1 className="text-xl font-bold my-10 ml-5">Users</h1>

       <div className="px-20">
          <table className="table table-auto w-full border">
            <thead className="bg-stone-100 border">
              <tr>
                <th className="border py-3">User</th>
                <th className="border  py-3">No of Donations</th>
                <th className="border py-3">Authorized</th>
                <th className="border py-3"> </th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((data, index) => (
                <tr>
                  <td className="border px-4">{data.userName}</td>
                  <td className="border px-4">{data.numberOfDonations}</td>
                  <td className="border px-4">
                    {data.authorizedDonor ? (
                      <span className="text-blue-500 font-bold "> Yes</span>
                    ) : (
                      "No"
                    )}
                  </td>
                  <td className="border">
                      <button disabled={data.authorizedDonor}
                        onClick={() => userAuthorisation(data._id)}
                        className= " disabled:bg-stone-300 bg-green-500 px-2 rounded text-white"
                      >
                        Authorise
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
       </div>
      </div>
    </>
  );
};

export default Admin;
