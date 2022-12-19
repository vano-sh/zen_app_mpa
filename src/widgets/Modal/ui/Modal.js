/* eslint-disable react-hooks/exhaustive-deps */
import { useLang, useBodyHidden, useForm } from 'shared/model'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { IconClose } from 'shared/assets/icons'
import { Title } from 'shared/ui/Title'
import { Form } from './components/Form'
import { Success } from './components/Success'
import classes from './Modal.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Modal = ({ data }) => {

  const { lang } = useLang()
  const {
    isModalActive,
    isSuccessSubmit,
    toggleWindowModal,
    changeSuccessSubmit,
    changeFormReset
  } = useForm()
  const dispatch = useDispatch()

  const successMessage = lang === 'en'
    ? 'Order submit successfully!'
    : 'Заказ успешно отправлен!'

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
    <div className={classNames(classes.modal, { [classes.active]: isModalActive })}>
      <div className={classes.body}>
        <button
          className={classes.close}
          onClick={handleModalCloseButtonClick}
        >
          <IconClose />
        </button>

        {data?.title && (
          <Title className={classes.title} >
            {data.title.data}
          </Title>
        )}

        {data?.form && (
          <Form form={data.form} />
        )}

        {isSuccessSubmit &&
          <Success>
            {successMessage}
          </Success>
        }
      </div>
    </div>
  )
}