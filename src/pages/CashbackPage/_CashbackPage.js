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
import classes from './_CashbackPage.module.scss'

export const CashbackPage = () => {
  const { data } = useData()
  const { theme } = useTheme()
  const { toggleWindowModal } = useForm()

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
        data-name={data.pages.cashback.name}>
        <div className={classes.wrapper}>
          {data.pages.cashback.title && (
            <Title
              className={classes.title}
              size={data.pages.cashback.title.priority}>
              {data.pages.cashback.title.data}
            </Title>
          )}
          <div className={classes.body}>
            {data.pages.cashback.texts.length > 0 &&
              data.pages.cashback.texts.map((text) => (
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
            {data.pages.cashback.orderBtn.data}
          </button>
        </div>
      </section>
    </>
  )
}
