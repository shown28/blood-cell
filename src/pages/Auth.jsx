import React, { useState } from "react";
import { userLoginApi, userRegisterApi } from "../services/allApi";
import { Link, useNavigate } from "react-router-dom";

const Auth = ({ insideRegister }) => {
  const [invalidPassword, setinvalidPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(true);
 

  const [userData, setUserData] = useState({
    userName:"",
    userEmail: "",
    password: "",
    cpassword: ""
  });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { userEmail, password } = userData;
    
    const email = userEmail;
    const newData = { email, password };
  

    
    if (newData.email && newData.password) {
      try {
        const result = await userLoginApi(newData);
        console.log(result)
        const isAdmin = result.data?.user?.type 
       

        if(result.status==200){
          alert("login successful")
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token) 
          
          if(isAdmin == 'admin'){
            navigate("/admin")
            setUserData({userEmail: "",password: "",cpassword: ""})
          }
          else{
            setTimeout(() => {
              navigate("/")
            }, 1000);
            setUserData({userEmail: "",password: "",cpassword: ""})
          }
         
        }
        else{
          if(result.status == 404){
            alert("invalid username or password")
          }
        }
      } catch (err) {
        console.log(err); 
      }
     
    } else {
      alert("please fill the form completly");
    }
  };

  const formValidation = (inputTag) => {
    const { name, value } = inputTag;

    // console.log(value)
    if (name == "email") {
      setUserData({ ...userData, userEmail: value });

      if (value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        setInvalidEmail(false);
      } else {
        setInvalidEmail(true);
      }
    }else if(name == "name"){
      setUserData({...userData,userName:value})
    }
    else if (name == "password") {
      setUserData({ ...userData, password: value });
    } else {
      if (name == "confirm-password") {
        setUserData({ ...userData, cpassword: value });
      }
    }
   console.log(userData)

  };
  // console.log("invalid password"+ invalidPassword)
  // console.log("invalid Email"+ invalidEmail)
  // console.log(userData.cpassword + userData.password)

  const registerHandle = async (e) => {
    e.preventDefault();
  

    const { userName,userEmail, password, cpassword } = userData;
    const email = userEmail;

    const newUserData = { userName,email, password };
    console.log(newUserData);
    if (userData.password && userData.userEmail && userData.cpassword) {
      try {
        const result = await userRegisterApi(newUserData);
        if (result.status == 409) {
          alert(result.response.data);
          return;
        }
        if (result.status == 200) {
          alert("succces");
          navigate("/login");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("please fill all the field");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {insideRegister ? (
                  <span>Create an account</span>
                ) : (
                  <span>Login</span>
                )}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              {
                insideRegister && 
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => formValidation(e.target)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
              }
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => formValidation(e.target)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {invalidEmail && (
                    <span className="text-red-600">Invalid Email</span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={(e) => formValidation(e.target)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                {insideRegister && (
                  <div>
                    <label
                      for="confirm-password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm-password"
                      id="confirm-password"
                      placeholder="••••••••"
                      onChange={(e) => formValidation(e.target)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />

                    {userData.password == userData.cpassword ? null : (
                      <span className="text-red-500">Password Mismatch</span>
                    )}
                  </div>
                )}

                {insideRegister ? (
                  <div>
                    <button
                      style={{ cursor: "pointer" }}

                      onClick={registerHandle}
                      className="w-full mb-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        
                        Login here
                      </Link>
                    </p>
                  </div>
                ) : (
                  <div>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={handleLogin}
                      className="w-full text-white bg-blue-600 mb-3 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Login
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      New user?{" "}
                      <Link
                        to={"/register"}
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Register here
                      </Link>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Auth;
