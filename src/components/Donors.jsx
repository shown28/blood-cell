import React from "react";
import serverUrl from "../services/serverUrl";


const Donors = ({ homeAuthUser }) => {
 
  return (
    // voluntary donors
    <>
      {/* 
            <div class="w-full max-w-sm px-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                <div class="flex flex-col items-center pb-10">

                    <div class="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg">
                        <img className='h-full object-cover rounded-full' src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="Bonnie image" />
                    </div>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <div className='bg-red-100'>
                        <p class="text-sm   text-gray-500 dark:text-gray-400">"Donating blood was a fulfilling experience."</p>

                    </div>
                </div>
            </div> */}

      {homeAuthUser?.map((user) => (
        <div class="flex flex-col bg-slate-200 shadow-sm border border-slate-200  ml-10 rounded-lg ">
          <div class="m-2.5 overflow-hidden bg-white rounded-md h-48 w-52 flex justify-center items-center">
            <img
              class="w-full h-full object-cover"
              src={`${serverUrl}/uploads/${user.photo}`}
              alt="profile-picture"
            />
          </div>
          <div class="px-6 text-center">
            <h4 class="mb-1 text-xl font-semibold text-slate-800">{user.userName}</h4>
            <p
              class="text-sm text-left font-semibold text-slate-500 uppercase
                            marquee"
            >
              <span>A+</span> <br />
              <span className="text-xs">No.of Donation: {user.numberOfDonations} </span>
              <br />
              {/* <span
                style={{ wordWrap: "break-word", wordBreak: "break-all" }}
                className="text-xs mt-10 "
              >
                "Donating blood was a fulfilling experience."
              </span> */}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Donors;
