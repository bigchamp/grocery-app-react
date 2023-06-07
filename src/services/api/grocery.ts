import baseService from './baseService'

export const getGroceries = async () => {
  const res = await baseService.get('/groceries')
  return res.data
}

export const getGroceryById = async (id: number) => {
  const res = await baseService.get(`/groceries/${id}`)
  return res.data
}

export const deleteGrocery = async (id: number) => {
  const res = await baseService.delete(`/groceries/${id}`)
  return res.data
}

export const postGrocery = async (data: GroceryType) => {
  const res = await baseService.post(`/groceries`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.data
}

export const putGrocery = async (data: GroceryType) => {
  const res = await baseService.put(`/groceries/${data.id}`, data)
  return res.data
}
