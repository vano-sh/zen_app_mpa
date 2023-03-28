import { useEffect } from 'react'
import { useData, useLang, useTheme } from 'shared/model'
import { useDispatch } from 'react-redux'
import { Preloader } from 'widgets'
import { LayoutPage } from 'pages/LayoutPage'
import { classNames } from 'shared/lib/helpers'
import classes from './App.module.scss'

export const App = () => {
  const { lang } = useLang()
  const { theme } = useTheme()
  const { isLoading, fetchData } = useData()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [lang, dispatch, fetchData])

  return (
    <div
      className={classNames(classes.app, {
        dark: theme === 'dark',
      })}
    >
      {isLoading ? <Preloader /> : <LayoutPage />}
    </div>
  )
}
