import React from 'react'

export function Logout (){
    localStorage.removeItem("token")
    return(
        <div>
            Thanks for Playing!
        </div>
    )
}