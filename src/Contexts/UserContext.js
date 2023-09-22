import { createContext, useState, useContext } from 'react'
import { getPerfilByIdUsuario } from '../api/perfil.service'

export const UserContext = createContext({
  idPerfil: '',
  idUsuario: '',
  isAuthtenticated: '',
  currentUser: {},
  mail: '',
  setIdUsuario: () => {},
  setCurrentUser: () => {},
  saveUser: (userData) => {},
  logOut: () => {},
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const value = { currentUser, setCurrentUser }
  const [idPerfil, setIdPerfil] = useState(null)
  const [idUsuario, setIdUsuario] = useState(null)
  const [isAuthtenticated, setIsAuthtenticated] = useState(null)
  const [mail, setMail] = useState(null)

  async function saveUser(userData) {
    //setAccessToken(userData.token)
    //localStorage.setItem('token', JSON.stringify(userData.refreshToken))
    setIsAuthtenticated(true)
    setIdUsuario(userData.idUsuario)

    setMail(userData.mail)
    await getPerfilByIdUsuario(userData.idUsuario)
      .then((data) => data.json())
      .then(json => setIdPerfil(json.idPerfil))
      .catch((err) => console.log(err))
  }
  function logOut() {
    setIdPerfil(null)
    setIdUsuario(null)
    setIsAuthtenticated(null)
    setMail(null)
  }
  return (
    <UserContext.Provider
      value={{
        isAuthtenticated,
        saveUser,
        idPerfil,
        idUsuario,
        currentUser,
        mail,
        setIdUsuario,
        logOut
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useAuth2 = () => useContext(UserContext)
