import React, { useEffect, useState } from "react";
import "../App.css";
import UrgentRequire from "../components/UrgentRequire";
import Donors from "../components/Donors";
import Header from "../components/Header";
import { homeAuthoriseUserApi, homeRequestsApi } from "../services/allApi";
import { Link } from "react-router-dom";

const Home = () => {
  const [urgentRequests, setUrgentRequest] = useState([]);
  const [homeAuthUser, setHomeAuthUser] = useState([]);
  useEffect(() => {
    homeAuthoriseUser();
    homeRequests();
  }, []);

  const homeAuthoriseUser = async () => {
    try {
      const result = await homeAuthoriseUserApi();
      if (result.status == 200) {
        setHomeAuthUser(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const homeRequests = async () => {
    try {
      const result = await homeRequestsApi();
      if (result.status == 200) {
        setUrgentRequest(result.data);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // console.log(urgentRequests);

  return (
    <>
      <Header isLogedIn={sessionStorage.getItem("token")} />
      <div className=" h-full ">
        <div className="hero w-screen  ">
          {/* img div */}
          <div className="heroImg w-full h-screen  ">
            <img
              // src="https://www.shutterstock.com/image-photo/smiling-donor-talking-healthcare-worker-600nw-2391604267.jpg"
              src="https://static.vecteezy.com/system/resources/previews/009/484/977/non_2x/hands-of-the-giver-and-the-recipient-to-donate-blood-blood-donation-concept-heart-medical-sign-give-blood-save-life-world-blood-donor-day-june-14-3d-eps10-illustration-vector.jpg"
              alt=""
            />
          </div>

          {/* hero title and link  */}
          <div className="hero-title w-full h-screen  flex items-center justify-center flex-col ">
            {/* title */}
            <h1  className="text-white  text-center lg:text-5xl font-extrabold animate__animated animate__fadeInUp  ">
              "Give <span className="blood"> Blood</span>, Save Lives - Be a
              Hero Today!"
            </h1>
            <button className="hover:text-red-700 rounded text-white px-4 py-2 my-2">
              <a href="#">Know More</a>
            </button>
          </div>
        </div>

        {/* Urgent Require */}
        <div>
          <h1 className="Urgent-required text-center font-medium  md:text-3xl mt-20 ">
            Urgent Blood Required
          </h1>
          <div className=" grid grid-cols-1 gap-5 content-center my-14 justify-items-center   md:grid-cols-4 ">
           
            {urgentRequests?.map((items, index) => (
              <UrgentRequire key={index} request={items} />
            ))}

          </div>
          <span className="hover:underline hover:text-red-600 font-bold ml-5" > <Link to={'/requests'}>Click here for more requests.....</Link></span>

        </div>

        {/* about */}
        {/* our mission */}
        <div
          id="about"
          className="bg-stone-100 my-8 w-full  py-30 grid grid-cols-1 gap-5 justify-items-center md:grid-cols-3"
        >
          <div data-aos="fade-right" className="w-70 p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:justify-self-end ">
            <h1 className="text-center font-bold text-2xl dark:text-white text-gray-900 mb-3">
              Our<span className="text-red-700"> Mission</span>
            </h1>
            <p className="text-center font-normal text-gray-700 ">
              Our mission is to save lives by ensuring a reliable and accessible
              supply of blood for those in need. We strive to connect voluntary
              donors with patients through a seamless and efficient system,
              fostering a community of care and compassion.
            </p>
          </div>

          <div data-aos="fade-zoom-in" className="w-70 p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 className="text-center font-bold text-2xl dark:text-white text-gray-900 mb-3">
              Our <span className="text-red-700">Vision</span>
            </h1>
            <p className="text-center font-normal text-gray-700 ">
              We envision a future where no one suffers due to a lack of blood.
              Our goal is to build a strong network of donors and recipients,
              leveraging technology to make blood donation more accessible,
              transparent, and impactful.
            </p>
          </div>

          <div className="w-70 p-6 bg-gray-200 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:justify-self-start ">
            <h1 className="text-center font-bold text-2xl dark:text-white text-gray-900 mb-3">
              Our<span className="text-red-700"> Aim</span>
            </h1>
            <p className="text-center font-normal text-gray-700 ">
              Our aim is to raise awareness about the importance of blood
              donation, encourage more people to donate regularly, and create an
              efficient system that provides quick and easy access to blood for
              hospitals and patients in emergencies.
            </p>
          </div>
        </div>

        {/* voluntary donors */}

        <div className="mx-7">
          <h1 className="text-center mb-8 font-medium text-2xl md:text-3xl">
            Our Voluntary Donors{" "}
          </h1>

          <marquee behavior="" direction="">
            <div className=" flex ">
              <Donors homeAuthUser={homeAuthUser} />
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Home;
