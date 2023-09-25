import { createContext, useState } from 'react'

export const PetContext = createContext({
  pets: [],
  setPets: () => { }
})

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([])
  const value = { pets, setPets }

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>
}