import { memo } from 'react'
import { useTheme } from 'shared/model'
import { useDispatch } from 'react-redux'
import { IconMoon, IconSun } from 'shared/assets/icons'
import classes from '../../Header.module.scss'

export const Theme = memo(() => {

  const { theme, toggleTheme } = useTheme()

  const dispatch = useDispatch()

  const handleThemeToogle = () => {
    dispatch(toggleTheme())
  }

  return (
    <button
      className={classes.theme}
      onClick={handleThemeToogle}
    >
      {theme === 'light'
        ? <IconMoon />
        : <IconSun />
      }
    </button>
  )
})