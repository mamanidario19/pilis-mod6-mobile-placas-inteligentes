import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { UserInfoScreen } from '../User/UserInfoScreen'
import { LoginScreen } from '../Login/LoginScreen'

export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      {currentUser
        ? (
          <UserInfoScreen />
        )
        : (
          <LoginScreen />
        )}
    </>

  )
}