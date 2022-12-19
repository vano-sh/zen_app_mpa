import { useSelector } from 'react-redux'
import { fetchInfoData } from '../reducers/_infoDataSlice'

export const useInfoData = () => {
  const {
    isLoading,
    infoData,
    errorMessage,
  } = useSelector((state) => state.infoDataReducer)

  return { fetchInfoData, isLoading, infoData, errorMessage }
}