import { createContext, useState, useContext } from 'react'
import { getPerfilByIdUsuario } from '../api/perfil.service'

export const UserContext = createContext({
  idPerfil: "",
  idUsuario: "",
  currentUser: {},
  mail: "",
  setIdUsuario: () => { },
  setCurrentUser: () => { },
  saveUser: (userData) => { },
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser,] = useState(null)
  const value = { currentUser, setCurrentUser, }
  const [idPerfil, setIdPerfil] = useState(null)
  const [idUsuario, setIdUsuario] = useState(null)


  const [mail, setMail] = useState(null)

  async function saveUser(userData) {
    //setAccessToken(userData.token)
    //localStorage.setItem('token', JSON.stringify(userData.refreshToken))
    //setIsAuthtenticated(true)
    setIdUsuario(userData.idUsuario)

    setMail(userData.mail)
    //const perfil = await getPerfilByIdUsuario(userData.idUsuario)
    //if (perfil.ok) setIdPerfil(perfil.idPerfil)
  }
  return <UserContext.Provider value={{ saveUser, idPerfil, idUsuario, currentUser, mail, setIdUsuario }}>{children}</UserContext.Provider>
}

export const useAuth2 = () => useContext(UserContext)

