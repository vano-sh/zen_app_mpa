import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
  useAnimateRef,
  useData,
  useForm,
  useTheme,
} from 'shared/model'
import { Title, Text } from 'shared/ui'
import { classNames } from 'shared/lib/helpers'
import classes from './CashbackPage.module.scss'

export const CashbackPage = () => {
  const { data } = useData()
  const { theme } = useTheme()
  const { toggleWindowModal } = useForm()

  const { cashback } = data.pages

  const dispatch = useDispatch()

  const orderBtnRef = useRef(null)
  useAnimateRef(orderBtnRef)

  const handleModalButtonActiveClick = () => {
    dispatch(toggleWindowModal(true))
  }

  if (!data) return

  return (
    <>
      <section
        className={classes.cashback}
        data-name={cashback.name}>
        <div className={classes.wrapper}>
          {cashback.title && (
            <Title
              className={classes.title}
              size={cashback.title.priority}>
              {cashback.title.data}
            </Title>
          )}
          <div className={classes.body}>
            {cashback.texts.length > 0 &&
              cashback.texts.map((text) => (
                <Text key={text} className={classes.copy}>
                  {text}
                </Text>
              ))}
          </div>
          <button
            ref={orderBtnRef}
            className={classNames(classes.btn, {
              dark: theme === 'dark',
            })}
            onClick={handleModalButtonActiveClick}>
            {cashback.orderBtn.data}
          </button>
        </div>
      </section>
    </>
  )
}
