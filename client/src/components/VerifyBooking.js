import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "../style/VerifyBooking.css"
import GoogleLogin from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

function VerifyBooking(){

    useEffect(() => {
      

    }, [])


    return(
        
      <div className="VerifyBooking">
        <h1>Testing</h1>
        <GoogleLogin
            clientId="310046150503-9oopaeieiv9p6l5t7qmiitev0jugfuvu.apps.googleusercontent.com"
                render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

      </div>
    )
}



export default VerifyBooking