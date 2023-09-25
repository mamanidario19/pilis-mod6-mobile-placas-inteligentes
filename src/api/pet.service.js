import { api } from './api'
const SERVICE_ENDPOINT = `${api.server}/mascotas`

export const getPets = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}

export const getPetsByIdProfile = async(id) => {
  try {
      const response = await fetch(`${api.server}/mascotasByIdPerfil/${id}`)        
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
}

export const createPet = async ({
  nombre,
  edad,
  sexo,
  vacunas,
  observaciones,
  idResponsable,
  idRaza,
}) => {
  try {
    const response = await fetch(`${api.server}/mascotas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        edad: parseInt(edad),
        sexo,
        vacunas,
        observaciones,
        idResponsable,
        idRaza,
      }),
    })

    return response
  } catch {
    throw new Error('could not fetch')
  }
}
