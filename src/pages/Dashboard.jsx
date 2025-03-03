import React, { useState } from "react";
import EditUser from "../components/EditUser";

const Dashboard = () => {
  const [indashboard, setInDashboard] = useState(true);
  const [inInbox, setInInbox] = useState(false);

  // console.log(`inside dashboard ? ${indashboard}`);
  // console.log(`inside inbox ? ${inInbox}`);

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

  return (
    <>
      <div className="w-full h-screen mt-20 px-2  ">
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

          { 
            inInbox ?
            <button
            onClick={() => showWhere("inbox")}
            className="hover:bg-slate-500 bg-slate-500 text-slate-100 hover:text-slate-600 mx-3 px-2 py-2 rounded"
          >
            Inbox
            <span className="text-xs px-1 bg-green-500 text-white rounded-full">
              3
            </span>
          </button>

          :

          <button
            onClick={() => showWhere("inbox")}
            className="hover:bg-slate-300 hover:text-slate-600 mx-3 px-2 py-2 rounded"
          >
            Inbox
            <span className="text-xs px-1 bg-green-500 text-white rounded-full">
              3
            </span>
          </button>

          }

          
        </div>
        {/* dashboard view */}
        <div className="bg-slate-100 mx-2 rounded-lg px-3 py-1 border border-slate-200">
          <span>
            {" "}
            <EditUser />
          </span>
          <br />
          <br />
          <span>Name: user</span> <br />
          <span>Blood Group: A+</span>
          <br />
          <span>Address: kakkanad,kochi,kerala</span>
          <br />
          <span>No of donations : 0</span>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
