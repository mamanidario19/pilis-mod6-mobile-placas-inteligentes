import { api } from "./api"

export const getObjectsByIdProfile = async(id) => {
  try {
      const response = await fetch(`${api.server}/objetosByIdPerfil/${id}`)
      return response.json();
    } catch {
      throw new Error('could not fetch');
    }
}

export const createObject = async ({
    nombre,
    foto,
    observaciones,
    idPropietario
  }) => {
    try {
      const response = await fetch(`${api.server}/objetos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          foto,
          observaciones,
          idPropietario,
        }),
      })
  
      return response
    } catch {
      throw new Error('could not fetch')
    }
  }
  