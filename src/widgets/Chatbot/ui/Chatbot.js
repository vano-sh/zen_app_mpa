import { useDispatch } from 'react-redux'
import { useChatbot, useBodyHidden } from 'shared/model'
import { Open } from './components/Open'
import { Chat } from './components/Chat'
import { classNames } from 'shared/lib/helpers'
import classes from './Chatbot.module.scss'

export const Chatbot = () => {

  const { isChatOpen, toggleChatOpen } = useChatbot()
  const dispatch = useDispatch()

  const handleOpenChat = () => {
    dispatch(toggleChatOpen(false))
  }

  useBodyHidden(isChatOpen)

  return (
    <div className={classNames(classes.chatbot, { [classes.active]: isChatOpen })} onClick={handleOpenChat}>
      <div onClick={(event) => event.stopPropagation()}>
        <Open />
        <Chat />
      </div>
    </div>
  )
}