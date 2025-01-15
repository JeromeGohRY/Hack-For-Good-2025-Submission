import axios from 'axios'
const baseUrl ='/api/products'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const create = async newObject => {
    // const config = {
    //   headers: { Authorization: token },
    // }
  
    // const response = await axios.post(baseUrl, newObject, config)
    const response = await axios.post(baseUrl, newObject)
    return response.data
  }
  
const update = async productToUpdate => {
    // const config = {
    //   headers: { Authorization: token },
    // }
    const response= await axios.put(`${baseUrl}/${productToUpdate.id}`,productToUpdate)
    return response.data
  }
  
const remove = async id => {
    // const config = {
    //   headers: { Authorization: token },
    // }
    const response=await axios.delete(`${baseUrl}/${id}`)
    return response.data
  }
  
  export default { getAll,create,update,remove }