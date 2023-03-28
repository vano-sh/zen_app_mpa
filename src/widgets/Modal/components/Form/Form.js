import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { API_BASE_URL } from 'shared/config/api'
import { useLang, useForm, useFetch } from 'shared/model'
import { Field, Connection, Policy } from './components'
import { validateName, validateTel, validateEmail } from 'shared/lib/helpers'
import classes from '../../Modal.module.scss'

export const Form = ({ form }) => {
  const { fieldName, fieldTel, fieldEmail } = form

  const { lang } = useLang()
  const { isFormReset, isSuccessSubmit, changeFormReset, changeSuccessSubmit } =
    useForm()

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(false)
  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(false)
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [connection, setConnection] = useState('')
  const [isValidConnection, setIsValidConnection] = useState(false)
  const [isPolicyChecked, setIsPolicyChecked] = useState(true)
  const [isSending, setIsSending] = useState(false)

  const { postData } = useFetch(API_BASE_URL)

  const isSubmitDisabled = !(
    isValidName &&
    isValidTel &&
    isValidEmail &&
    isValidConnection &&
    isPolicyChecked
  )

  const handleFieldChange = useCallback((event) => {
    const type = event.target.type
    const value = event.target.value

    if (type === 'text') {
      setName(value)
      setIsValidName(validateName(value))
    }
    if (type === 'tel') {
      setTel(value)
      setIsValidTel(validateTel(value))
    }
    if (type === 'email') {
      setEmail(value)
      setIsValidEmail(validateEmail(value))
    }
  }, [])

  const handleConnectionChange = useCallback((event) => {
    const connection = event.target.value
    setConnection(connection)

    connection ? setIsValidConnection(true) : setIsValidConnection(false)
  }, [])

  const handlePolicyChange = useCallback(() => {
    setIsPolicyChecked((prev) => !prev)
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const order = {
      type: 'order',
      date: new Date().toLocaleString(),
      name,
      tel,
      email,
      connection,
      policy: isPolicyChecked,
    }

    setIsSending(true)

    postData(`${lang}/orders.json`, order).then(
      () => {
        let timerID = setTimeout(() => {
          setIsSending(false)
          dispatch(changeSuccessSubmit(true))
        }, 1000)
        return () => clearTimeout(timerID)
      },
      (error) => console.error({ error })
    )
  }

  useEffect(() => {
    if (isSuccessSubmit || isFormReset) {
      setName('')
      setIsValidName(false)
      setTel('')
      setIsValidTel(false)
      setEmail('')
      setIsValidEmail(false)
      setConnection('')
      setIsValidConnection(false)
      dispatch(changeFormReset(false))
    }
  }, [isSuccessSubmit, isFormReset, changeFormReset, dispatch])

  return (
    <>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        {fieldName && (
          <Field
            details={fieldName}
            value={name}
            isValidField={isValidName}
            onFieldChange={handleFieldChange}
          />
        )}
        {fieldTel && (
          <Field
            details={fieldTel}
            value={tel}
            isValidField={isValidTel}
            onFieldChange={handleFieldChange}
          />
        )}
        {fieldEmail && (
          <Field
            details={fieldEmail}
            value={email}
            isValidField={isValidEmail}
            onFieldChange={handleFieldChange}
          />
        )}

        {form?.connection && (
          <Connection
            details={form.connection}
            connection={connection}
            isValidConnection={isValidConnection}
            onConnectionChange={handleConnectionChange}
          />
        )}

        {form?.policy && (
          <Policy
            policy={form.policy}
            isPolicyChecked={isPolicyChecked}
            onPolicyChange={handlePolicyChange}
          />
        )}

        <button
          className={classes.btn}
          type='submit'
          disabled={isSubmitDisabled}
        >
          {form.buttonText}
        </button>
      </form>

      {isSending && (
        <div className={classes.sending}>
          {lang === 'en' ? 'Sending...' : 'Отправка...'}
        </div>
      )}
    </>
  )
}
