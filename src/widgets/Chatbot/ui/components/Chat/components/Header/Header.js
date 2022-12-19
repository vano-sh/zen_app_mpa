import { useChatbot } from 'shared/model'
import { useDispatch } from 'react-redux'
import { Logo } from './components/Logo'
import { Notice } from './components/Notice'
import { IconClose } from 'shared/assets/icons'
import classes from '../../Chat.module.scss'

export const Header = () => {

  const { toggleChatOpen } = useChatbot()

  const dispatch = useDispatch()

  const handleCloseChat = () => {
    dispatch(toggleChatOpen(false))
  }

  return (
    <div className={classes.header}>
      <Logo />
      <Notice />
      <button
        className={classes.close}
        onClick={handleCloseChat}
      >
        <IconClose />
      </button>
    </div>
  )
}
export default Header