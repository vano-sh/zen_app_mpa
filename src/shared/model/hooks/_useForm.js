import { useSelector } from 'react-redux'
import {
  toggleWindowModal,
  changeSuccessSubmit,
  changeFormReset
} from 'shared/model/reducers/_orderSlice'

export const useForm = () => {
  const {
    isModalActive,
    isSuccessSubmit,
    isFormReset
  } = useSelector((state) => state.orderReducer)

  return {
    isModalActive, toggleWindowModal,
    isSuccessSubmit, changeSuccessSubmit,
    isFormReset, changeFormReset
  }
}