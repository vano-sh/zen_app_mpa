/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLang, useBodyHidden, useForm } from 'shared/model'
import { IconClose } from 'shared/assets/icons'
import { Title } from 'shared/ui'
import { Form, Success } from './components'
import { classNames } from 'shared/lib/helpers'
import classes from './Modal.module.scss'

export const Modal = ({ data }) => {
  const { lang } = useLang()
  const {
    isModalActive,
    isSuccessSubmit,
    toggleWindowModal,
    changeSuccessSubmit,
    changeFormReset,
  } = useForm()
  const dispatch = useDispatch()

  const successMessage =
    lang === 'en' ? 'Order submit successfully!' : 'Заказ успешно отправлен!'

  useBodyHidden(isModalActive)

  useEffect(() => {
    if (isSuccessSubmit) {
      const timerId = setTimeout(() => {
        dispatch(toggleWindowModal(false))
        dispatch(changeSuccessSubmit(false))
      }, 2000)
      return () => clearTimeout(timerId)
    }
  }, [isSuccessSubmit])

  const handleModalCloseButtonClick = () => {
    dispatch(toggleWindowModal(false))
    dispatch(changeFormReset(true))
  }

  return (
    <div
      className={classNames(classes.modal, {
        [classes.active]: isModalActive,
      })}
    >
      <div className={classes.body}>
        <button className={classes.close} onClick={handleModalCloseButtonClick}>
          <IconClose />
        </button>

        {data?.title && (
          <Title className={classes.title}>{data.title.data}</Title>
        )}

        {data?.form && <Form form={data.form} />}

        {isSuccessSubmit && <Success>{successMessage}</Success>}
      </div>
    </div>
  )
}
