import { getGroceries } from '@services/api/grocery'
import { useQuery } from '@tanstack/react-query'

export default function useGroceries() {
  return useQuery(['getGroceries'], getGroceries)
}
