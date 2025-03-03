import React from 'react'

const Auth = ({insideRegister}) => {
  return (
    <>
    {
        
       insideRegister ?
       <div>Register</div>
       :
      <div>Login</div>
    }
                
   </>     
  )
}

export default Auth