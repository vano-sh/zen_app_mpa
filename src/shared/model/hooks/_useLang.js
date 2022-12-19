import { useSelector } from "react-redux"
import { changeLang } from 'shared/model/reducers/_langSlice'

export const useLang = () => {
  const { lang } = useSelector((state) => state.langReducer)

  return { lang, changeLang }
}