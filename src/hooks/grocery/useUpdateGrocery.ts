import { putGrocery } from '@services/api/grocery'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useUpdateGrocery() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: GroceryType) => putGrocery(data),
    onSuccess: (data: GroceryType) => {
      queryClient.setQueryData(['getGroceries'], (oldData: any) =>
        oldData.map((item: GroceryType) => (item.id === data.id ? data : item)),
      )
    },
    onError: (err: any) => {
      console.log('err: ', err)
    },
  })
}
