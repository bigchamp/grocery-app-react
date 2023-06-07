import { postGrocery } from '@services/api/grocery'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useCreateGrocery() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: GroceryType) => postGrocery(data),
    onSuccess: (data) => {
      queryClient.setQueryData(['getGroceries'], (oldData: any) => [
        ...oldData,
        data,
      ])
    },
    onError: (err: any) => {
      console.log('err: ', err)
    },
  })
}
