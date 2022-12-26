import { useSelector } from 'react-redux'
import { fetchData } from '../reducers/_dataSlice'

export const useData = () => {
  const { data, isLoading } = useSelector(
    (state) => state.dataReducer
  )

  return { data, isLoading, fetchData }
}
