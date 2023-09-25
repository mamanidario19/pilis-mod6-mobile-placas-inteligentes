import { api } from './api'
export const getPerfilByIdUsuario = async (id) => {
  try {
    const response = await fetch(`${api.server}/perfilesByIdUsuario/${id}`)
    return response
  } catch {
    throw new Error('could not fetch')
  }
}

export const createProfile = async ({
  nombre,
  apellido,
  direccion,
  telefono,
  facebook,
  instagram,
  idUsuario,
  idLocalidad,
}) => {
  try {
    const response = await fetch(`${api.server}/perfiles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        facebook: facebook,
        instagram: instagram,
        idUsuario: idUsuario,
        idLocalidad: idLocalidad,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }
}

export const updateProfile = async ({
  nombre,
  apellido,
  direccion,
  telefono,
  facebook,
  instagram,
  idUsuario,
  idLocalidad,
},id) => {
  try {
    const response = await fetch(`${api.server}/perfiles/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        facebook: facebook,
        instagram: instagram,
        idUsuario: idUsuario,
        idLocalidad: idLocalidad,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }
}
