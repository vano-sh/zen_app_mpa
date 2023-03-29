import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useChatbot, useData } from 'shared/model'
import chatbot from 'shared/assets/icons/gif/chatbot.gif'
import classes from './Open.module.scss'

export const Open = memo(() => {
  const { isChatOpen, setFaq, toggleChatOpen } = useChatbot()
  const {
    data: { faq },
  } = useData()

  const dispatch = useDispatch()

  const handleOpenClick = () => {
    dispatch(toggleChatOpen(true))
    dispatch(setFaq(faq))
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
