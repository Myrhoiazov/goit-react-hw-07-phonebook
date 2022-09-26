import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://6331b618cff0e7bf70f4d88e.mockapi.io/contacts',
  params: {},
});


export const getAllContact = async () => {
  const response = await requestApi.get('')
  return response
}

// export const postContact = async (item) => {
//   const response = await contactsApi.post('', item)

// }

// export const deleteContact = async (id) => {
//   const response = await contactsApi.delete(`/${id}`)

// }
