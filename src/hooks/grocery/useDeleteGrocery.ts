import { deleteGrocery } from '@services/api/grocery'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useDeleteGrocery() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: number) => deleteGrocery(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['getGroceries'])
    },
  })
}
