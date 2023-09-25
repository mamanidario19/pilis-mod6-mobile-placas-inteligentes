import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import { UserInfoScreen } from '../User/UserInfoScreen'
import { LoginScreen } from '../Login/LoginScreen'
import { useAuth2 } from '../../Contexts/UserContext'
export const ProfileScreen = () => {
  const { currentUser } = useContext(UserContext)
  const auth = useAuth2()
  return (
    <>
      {auth.isAuthtenticated
        ? (
          <UserInfoScreen />
        )
        : (
          <LoginScreen />
        )}
    </>

  )
}