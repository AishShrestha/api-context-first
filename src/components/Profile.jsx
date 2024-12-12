import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);

  if(!user){
      return <h1>Please Login</h1>
  }
  return (
    <>
    <h1>Profile</h1>
    <h2>UserName: {user.username}</h2>
    <h2>Password: {user.password}</h2>
    </>
  )
}

export default Profile