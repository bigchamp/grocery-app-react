import { deleteGrocery, getGroceries, getGrocery, postGrocery, putGrocery } from "../api/grocery";
import { GroceryType } from "../../types";

export const getGroceriesQuery = {
    queryKey: ['getGroceries'],
    queryFn: () => getGroceries()
}

export const deleteGroceryQuery = (queryClient: any) => ({
    mutationFn: (id: number) => deleteGrocery(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['getGroceries'])
    }
})

export const getGroceryQuery = (id: number | null) => ({
    queryKey: ['getGrocery'],
    queryFn: () => !!id && getGrocery(id),
    enabled: !!id,
    cacheTime: 0,
})

export const markGroceryQuery = (queryClient: any) => ({
  mutationFn: (data: GroceryType) => putGrocery(data.id, data),
  onSuccess: () =>  queryClient.invalidateQueries(['getGroceries']),
  onError: (err: any) => {
      console.log('err: ', err)
  }
})

export const updateGroceryQuery = (queryClient: any, id: number | null, handleClose: () => void) => ({
  mutationFn: (data: GroceryType) => !!id ? putGrocery(id, data) : postGrocery(data),
  onSuccess: () => {
    queryClient.invalidateQueries(['getGroceries'])
    handleClose()
  },
  onError: (err: any) => {
      console.log('err: ', err)
  }
})