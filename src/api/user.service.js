import { api } from './api'
const SERVICE_ENDPOINT = `${api.server}/signup`

export const getUsers = async () => {
  try {
    const response = await fetch(SERVICE_ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}

export const authUser = async ({ mail, password }) => {
  //console.log(mail, password);
  try {
    const response = await fetch(`${api.server}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: mail,
        password: password,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }


}