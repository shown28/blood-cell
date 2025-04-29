import React, { useEffect, useState } from "react";
import EditUser from "../components/EditUser";
import Header from "../components/Header";
import { getMyRequestsApi, deleteMyRequestApi } from "../services/allApi";
import serverUrl from "../services/serverUrl";

const Dashboard = () => {
  const [indashboard, setInDashboard] = useState(true);
  const [inInbox, setInInbox] = useState(false);
  const [myRequests, setMyRequests] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    bloodGroup: "",
    place: "",
    phone: "",
    numberOfDonations: "",
    lastDonation: "",
    email: "",
    dob: "",
    authorizedDonor: "",
    age: "",
  });
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(() => {
    getMyRequests();
    userOnLoad();
  }, []);

  const userOnLoad = () => {
    const userDetails = JSON.parse(sessionStorage.getItem("user"));

    setUser({
      userName: userDetails.userName,
      bloodGroup: userDetails.bloodGroup,
      place: userDetails.place,
      phone: userDetails.phone,
      numberOfDonations: userDetails.numberOfDonations,
      lastDonation: userDetails.lastDonation?.split("T")[0],
      email: userDetails.email,
      dob: userDetails.dob,
      authorizedDonor: userDetails.authorizedDonor,
      age: userDetails.age,
    });

    setProfilePhoto(userDetails.photo);
  };

  // console.log(`inside dashboard ? ${indashboard}`);
  // console.log(`inside inbox ? ${inInbox}`);
  console.log(user);
  console.log(profilePhoto);

  const showWhere = (nam) => {
    console.log(`inside dashboard ? ${indashboard}`);
    console.log(`inside inbox ? ${inInbox}`);
    console.log(nam);
    if (nam == "inbox") {
      setInInbox(true);
      setInDashboard(false);
    } else {
      setInDashboard(true);
      setInInbox(false);
    }
  };

  const getMyRequests = async () => {
    const reqHeader = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    try {
      const result = await getMyRequestsApi(reqHeader);
      if (result.status == 200) {
        setMyRequests(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteRequest = async (id) => {
    try {
      const reqHeader = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      const result = await deleteMyRequestApi(id, reqHeader);
      if (result.status == 200) {
        alert("Request deleted successfully");
        getMyRequests();
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(myRequests)
  function convertToTimestamp(dateString) {
    const date = new Date(dateString); // Convert to Date object
    const timestamp = Math.floor(date.getTime() / 1000); // Convert to seconds
    return timeAgo(timestamp);
  }
  function timeAgo(timestamp) {
    const now = Math.floor(Date.now() / 1000); // Current time in seconds
    const diff = now - timestamp; // Difference in seconds

    if (diff < 60) return `${diff} seconds ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;

    const days = Math.floor(diff / 86400);
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  console.log(user?.authorizedDonor);

  return (
    <>
      <Header isLogedIn={sessionStorage.getItem("token")} />

      <div className="w-full mt-20 px-2  ">
        <h1 className="text-2xl font-bold">Welcome User</h1>
        <div className="mb-2">
          {indashboard ? (
            <button
              value={"dashboard"}
              onClick={() => showWhere("dashboard")}
              className="hover:bg-slate-500 bg-slate-500 text-slate-100 hover:text-slate-600 mx-3 px-2 py-2 rounded"
            >
              {" "}
              Dashboard
            </button>
          ) : (
            <button
              value={"dashboard"}
              onClick={() => showWhere("dashboard")}
              className="hover:bg-slate-300 hover:text-slate-600 mx-3 px-2 py-2 rounded"
            >
              {" "}
              Dashboard
            </button>
          )}

          {inInbox ? (
            <button
              onClick={() => showWhere("inbox")}
              className="hover:bg-slate-500 bg-slate-500 text-slate-100 hover:text-slate-600 mx-3 px-2 py-2 rounded"
            >
              Inbox
              <span className="text-xs px-1 bg-green-500 text-white rounded-full">
                3
              </span>
            </button>
          ) : (
            <button
              onClick={() => showWhere("inbox")}
              className="hover:bg-slate-300 hover:text-slate-600 mx-3 px-2 py-2 rounded"
            >
              Inbox
              <span className="text-xs px-1 bg-green-500 text-white rounded-full">
                3
              </span>
            </button>
          )}
        </div>
        {/* dashboard view */}
        <div className="bg-slate-100 mx-2 rounded-lg px-3 py-1 border border-slate-200">
          <div className="flex flex-col-reverse md:flex-row md:justify-between">
            <div>
              <span>
                {" "}
                <EditUser userOnLoad={userOnLoad} user={user} />
              </span>
              <br />
              <br />
              <span>
                Name: <span className="font-bold">{user.userName}</span>
              </span>{" "}
              <br />
              <span>
                Blood Group:{" "}
                <span className="font-bold">
                  {" "}
                  {user.bloodGroup ? user.bloodGroup : <span>nill</span>}
                </span>
              </span>
              <br />
              <span>
                Address:<span className="font-bold">{user.place}</span>
              </span>
              <br />
              <span>
                Email: <span className="font-bold"> {user.email}</span>
              </span>
              <br />
              <span>
                No of donations :
                <span className="font-bold"> {user.numberOfDonations}</span>
              </span>
              <br />
              <span>
                Last donated:
                <span className="font-bold"> {user.lastDonation}</span>
              </span>
              <br />
              <span>
                Authorazied donor:{" "}
                <span className="font-bold">
                  {user.authorizedDonor ?? false ? <span>Yes</span> : <span>No </span>}
                </span>{" "}
              </span>
            </div>

            {/* profile picture */}
            <div>
              {profilePhoto ? (
                <img
                  className="w-60 h-60 object-cover rounded mb-3"
                  src={`${serverUrl}/uploads/${profilePhoto}`}
                  alt=""
                />
              ) : (
                <img
                  className="w-60 h-60 rounded mb-3"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt=""
                />
              )}
            </div>
          </div>
          {/* table */}
          <div>
            <h1 className="text-center font-bold text-2xl mt-3">My Requests</h1>
            <table className="table-auto w-full hidden md:table">
              <thead>
                <tr>
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Blood Group</th>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">date</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {myRequests.length == 0 ? (
                  <tr className="text-center text-xl font-bold">
                    <td>No requests found</td>
                  </tr>
                ) : (
                  myRequests.map((requests, index) => (
                    <tr key={requests._id}>
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{requests.pname}</td>
                      <td className="px-4 py-2">{requests.bloodGroup}</td>
                      <td className="px-4 py-2">{requests.place}</td>
                      <td className="px-4 py-2">
                        {convertToTimestamp(requests.date)}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleDeleteRequest(requests._id)}
                          className="bg-green-700 hover:bg-green-600 p-1 rounded text-white "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>

            {/* card for mobile */}
            <div className="md:hidden grid grid-cols-1 gap-3 md:grid-cols-4 justify-items-center ">
              {myRequests.length == 0 ? (
                <div className="">No Request Found</div>
              ) : (
                myRequests.map((requests, index) => (
                  <div className="urgentRequire  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
                    <h1 className="font-bold text-lg">{requests.bloodGroup}</h1>
                    <h5 className="font-bold ">
                      <span className="opacity-40">Need: </span>
                      {requests.units} Units
                    </h5>
                    <h5 className="font-bold ">
                      <span className="opacity-40">Place: </span>
                      {requests.place}
                    </h5>
                    <h5 className="font-bold ">
                      <span className="opacity-40">Name: </span>
                      {requests.pname}
                    </h5>
                    <h5 className="font-bold ">
                      <span className="opacity-40">Phone: </span>
                      {requests.phone}
                    </h5>
                    <h5 className="font-bold mt-2">
                      <span className="opacity-40">
                        {convertToTimestamp(requests.date)}{" "}
                      </span>
                    </h5>
                    <h5 className="font-bold ">
                      <button
                        onClick={() => handleDeleteRequest(requests._id)}
                        className="bg-green-700 hover:bg-green-600 p-1 rounded text-white "
                      >
                        Delete
                      </button>
                    </h5>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
