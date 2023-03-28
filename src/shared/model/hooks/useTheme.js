import { useSelector } from 'react-redux'
import { toggleTheme } from 'shared/model/reducers/themeSlice'

export const useTheme = () => {
  const { theme } = useSelector((state) => state.themeReducer)

  return { theme, toggleTheme }
}
