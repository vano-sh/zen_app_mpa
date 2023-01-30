import { useEffect } from 'react'
import { useData, useLang, useTheme } from 'shared/model'
import { useDispatch } from 'react-redux'
import {
  Preloader,
  ProgressBar,
  Header,
  Footer,
  Modal,
  Chatbot,
  ModalSlider,
} from 'widgets'
import { LayoutPage } from 'pages'
import { classNames } from 'shared/lib/helpers'
import classes from './_App.module.scss'

export const App = () => {
  const { lang } = useLang()
  const { theme } = useTheme()
  const dispatch = useDispatch()

  const { data, isLoading, fetchData } = useData()

  useEffect(() => {
    dispatch(fetchData())
  }, [lang, dispatch, fetchData])

  return (
    <div
      className={classNames(classes.app, {
        dark: theme === 'dark',
      })}>
      <ProgressBar />

      {isLoading && <Preloader />}

      {data?.header && <Header data={data.header} />}

      {!isLoading && <LayoutPage />}

      {data?.footer && <Footer data={data.footer} />}

      {data?.modal && <Modal data={data.modal} />}

      {!isLoading && <ModalSlider />}

      {!isLoading && <Chatbot />}
    </div>
  )
}
