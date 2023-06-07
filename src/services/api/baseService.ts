import axios from 'axios'

const baseService = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
  headers: {
    accept: 'application/json',
  },
  timeout: 10000,
})

export const authHeaderName = 'Authorization'

export default baseService
