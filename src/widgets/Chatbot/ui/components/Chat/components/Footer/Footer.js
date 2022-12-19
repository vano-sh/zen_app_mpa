import { useState } from 'react'
import { useChatbot, useLang } from 'shared/model'
import { useDispatch } from 'react-redux'
import { IconArrow } from 'shared/assets/icons'
import classes from '../../Chat.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Footer = () => {

  const [messageSubmit, setMessageSubmit] = useState('')
  const [isSymbolIncorrect, setIsSymbolIncorrect] = useState(false)

  const { addMessages } = useChatbot()
  const { lang } = useLang()
  const dispatch = useDispatch()

  const messageError = lang === 'en'
    ? 'Symbol incorrect!'
    : 'Неправильный символ!'

  const handleInputChange = (event) => {
    const value = event.target.value

    const regexpRU = /[а-яА-Я]/gm
    const regexpEN = /[a-zА-Я]/gm

    if (lang === 'en' && value.search(regexpRU) >= 0) {
      setIsSymbolIncorrect(true)
      return
    }
    if (lang === 'ru' && value.search(regexpEN) >= 0) {
      setIsSymbolIncorrect(true)
      return
    }

    setIsSymbolIncorrect(false)
    setMessageSubmit(value)
  }

  const handleFormSubit = (event) => {
    event.preventDefault()

    if (!messageSubmit) return

    dispatch(addMessages(
      {
        talker: 'user',
        messageType: 'question',
        message: messageSubmit
      }
    ))
  }

  return (
    <div className={classes.footer}>
      <form
        className={classes.form}
        onSubmit={handleFormSubit}
      >
        <label className={classNames(
          classes.input,
          {
            [classes.error]: isSymbolIncorrect
          })}
        >
          {isSymbolIncorrect && <span>{messageError}</span>}
          <input
            type='text'
            placeholder='Message...'
            value={messageSubmit}
            onChange={handleInputChange}
          />
        </label>

        <button
          className={classes.submit}
          type='submit'
        >
          <IconArrow />
        </button>
      </form>
    </div>
  )
}