import axios from 'axios'

// utils
// import { remove, saveString } from './storage'

const baseService = axios.create({
  baseURL: `${process.env.HOST}`,
  headers: {
    accept: 'application/json',
  },
  timeout: 10000,
})

export const authHeaderName = 'Authorization'

export const setAuthHeader = (token: string) => {
  baseService.defaults.headers.common[authHeaderName] = `Bearer ${token}`
}

export const saveToken = async (token: string) => {
//   await saveString('token', token)
}

export const clearTokens = async () => {
  baseService.defaults.headers.common[authHeaderName] = ''
//   await remove('token')
}

export default baseService
