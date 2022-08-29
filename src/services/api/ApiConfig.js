import axios from 'axios'

export const Api = () => {
  return axios.create({
    baseURL: 'https://controlebordadosdb.herokuapp.com/'
  })
}

// https://controlebordadosdb.herokuapp.com/
// http://localhost:5000/