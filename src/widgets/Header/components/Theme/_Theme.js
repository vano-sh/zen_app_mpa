import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from 'shared/model'
import { IconMoon, IconSun } from 'shared/assets/icons'
import classes from '../../_Header.module.scss'

export const Theme = memo(() => {
  const { theme, toggleTheme } = useTheme()

  const dispatch = useDispatch()

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  return (
    <button
      className={classes.theme}
      onClick={handleThemeToggle}>
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </button>
  )
})
