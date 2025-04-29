import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { authorizedUserApi, emailBloodRequest } from '../services/allApi'
import serverUrl from '../services/serverUrl'
import { useNavigate } from 'react-router-dom'



const VoluntaryDonors = () => {
    const [authorisedDonorData, setAuthorisedDonorData] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        authorizedDonor()
    }, [])

    const authorizedDonor = async () => {
        try {

            const result = await authorizedUserApi()
            setAuthorisedDonorData(result.data);


        } catch (err) {
            console.log(err.message)
        }
    }
    // console.log (authorisedDonorData)
    // authorisedDonorData.map(items=>(
    //     console.log(items.userName)
    // ))

    const requestMessage = async (email) => {
       
        const reqHeader = {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        }
        const reqBody = JSON.parse(sessionStorage.getItem("user"))
        console.log(reqBody)
        if(!reqBody){
            return alert('please login'), navigate("/login")          
        }
        try {
            alert("are you sure to request blood")
            const result = await emailBloodRequest(reqHeader,reqBody,email)
            if(result.status == 200){
                alert("request sent successfull")
            }
            else{
                console.log(result)
            }
            
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div className=''>

                <Header isLogedIn={sessionStorage.getItem('token')} />
                <h1 className='mt-20 text-2xl text-center font-bold  mb-10'>Our recogonised donors</h1>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6   justify-items-center'>

                    {
                        authorisedDonorData?.map((data, index) => (

                            <div key={index} class="flex flex-col bg-white shadow-sm border border-slate-200  rounded-lg  w-50">
                                <div class="m-2.5 overflow-hidden rounded-md h-48   flex justify-center items-center">
                                    <img class="w-full h-full object-cover" src={`${serverUrl}/uploads/${data.photo}`} alt="profile-picture" />
                                </div>
                                <div class="px-6 text-center">
                                    <h4 class="mb-1 text-xl font-semibold text-slate-800">
                                        {data.userName}
                                    </h4>
                                    <p
                                        class="text-sm text-left font-semibold text-slate-500 uppercase">
                                        <span> {data.bloodGroup} </span> <br />
                                        <span className='text-xs'>No.of Donation: {data.numberOfDonations}</span><br />
                                        <span className='text-xs'>Age: {data.age} </span><br />

                                    </p>

                                </div>
                                <div class="flex justify-center p-6 pt-2 gap-7">
                                    <button onClick={()=>requestMessage(data.email)} class="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                        Message
                                    </button>
                                </div>
                            </div>
                        ))
                    }



                </div>

            </div>
        </>
    )
}

export default VoluntaryDonors