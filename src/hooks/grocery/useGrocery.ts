import { getGroceryById } from '@services/api/grocery'
import { useQuery } from '@tanstack/react-query'

export default function useGrocery(id: number | null | undefined) {
  return useQuery({
    queryKey: ['getGrocery', id],
    queryFn: () => !!id && getGroceryById(id),
    enabled: !!id,
    cacheTime: 0,
  })
}
