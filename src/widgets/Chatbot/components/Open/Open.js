import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useChatbot, useLang, useFetch } from 'shared/model'
import { API_BASE_URL } from 'shared/config/api'
import chatbot from 'shared/assets/icons/gif/chatbot.gif'
import classes from './Open.module.scss'

export const Open = memo(() => {
  const { isChatOpen, setFaq, toggleChatOpen } = useChatbot()
  const { lang } = useLang()

  const dispatch = useDispatch()

  const { getData } = useFetch(API_BASE_URL)

  const handleOpenClick = () => {
    dispatch(toggleChatOpen(true))

    getData(`${lang}/faq.json`).then(
      (data) => dispatch(setFaq(data)),
      (error) => console.error(error)
    )
  }

  return (
    <button
      className={classes.open}
      type='button'
      onClick={handleOpenClick}
      disabled={isChatOpen}
    >
      <img src={chatbot} alt='chatbot' />
    </button>
  )
})
