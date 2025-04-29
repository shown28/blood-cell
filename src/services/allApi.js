import commonAPI from "./commonApi";
import serverUrl from "./serverUrl";


export const userRegisterApi =async (reqBody)=>{
    return await commonAPI("post",`${serverUrl}/user-register`,reqBody)
}
export const userLoginApi =async (reqBody) =>{
    return await commonAPI("post",`${serverUrl}/user-login`,reqBody)
}

export const addRequestApi =async (reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverUrl}/add-request`,reqBody,reqHeader)
}

export const getAllBloodRequestApi =async ()=>{
    return await commonAPI("get",`${serverUrl}/get-allRequest`)
}
export const getMyRequestsApi =async (reqHeader)=>{
    return await commonAPI("post",`${serverUrl}/get-myRequests`,{},reqHeader)
}
export const deleteMyRequestApi = async(id,reqHeader)=>{
    return await commonAPI("delete",`${serverUrl}/delete-myRequest/${id}`,{},reqHeader)
}
export const updateUserApi = async (reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverUrl}/edit-user`,reqBody,reqHeader)
}
export const authorizedUserApi = async()=>{
    return await commonAPI("get",`${serverUrl}/authorized-user`)
}
export const getAllUserApi = async(reqHeader)=>{
    return await commonAPI("get",`${serverUrl}/all-user`,{},reqHeader)
}
export const userAuthorisationApi =async(id,reqHeader)=>{
    return await commonAPI("put",`${serverUrl}/authorise/${id}`,{},reqHeader)   
}
export const homeAuthoriseUserApi = async ()=>{
    return await commonAPI("get",`${serverUrl}/home-authorised-users`)  
}
export const homeRequestsApi = async ()=>{
    return await commonAPI("get",`${serverUrl}/home-requests`) 
}
export const emailBloodRequest =async (reqHeader,reqBody,email)=>{
    return await commonAPI("post",`${serverUrl}/email-request/${email}`,reqBody,reqHeader)
}