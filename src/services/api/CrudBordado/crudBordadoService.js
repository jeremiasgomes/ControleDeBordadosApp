import { Api } from "../ApiConfig"

const getAll = async (url) => {
  try {
    const {data} = await Api().get(url) 
    
    return data

  } catch (error) {
    return error.message || 'Erro ao consultar a API.'
  }
}

const getAllMonth = async (url, month) => {
  try {
    const {data} = await Api().get(`${url}/${month}`) 
    
    return data

  } catch (error) {
    return error.message || 'Erro ao consultar a API.'
  }
}
const getById = async (url, id) => {
  try {
    const {data} = await Api().get(`${url}/${id}`) 
    
    return data

  } catch (error) {
    return error.message || 'Erro ao consultar o Id.'
  }
}

const create = async (url, dataToCreate) => {
  try {
    const {data} = await Api().post(url, dataToCreate) 
    
    return data

  } catch (error) {
    return error.message || 'Erro ao criar o registro'
  }
}

const updateById = async (url, id) => {
  try {
    const {data} = await Api().put(`${url}/${id}`) 
    
    return data

  } catch (error) {
    return error.message || 'Erro ao atualizar o registro.'
  }
}

const deleteById = async (url, id) => {
  try {
    const {data} = await Api().delete(`${url}/${id}`) 
    return data

  } catch (error) {
    return error.message || 'Erro ao deletar o registro.'
  }
}

export const crudBordadoService = {
  getAll,
  getAllMonth,
  getById,
  create,
  updateById,
  deleteById,
}