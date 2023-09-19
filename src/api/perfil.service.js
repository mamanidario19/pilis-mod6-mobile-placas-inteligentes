

export const getPerfilByIdUsuario = async (id) => {
  try {
    const response = await fetch(
      `${api.server}/perfilesByIdUsuario/${id}`

    )
    return response
  } catch {
    throw new Error('could not fetch')
  }
}