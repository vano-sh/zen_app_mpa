import { useChatbot } from 'shared/model'
import { Header, Dialog, Footer } from './components'
import { classNames } from 'shared/lib/helpers'
import classes from './Chat.module.scss'

export const Chat = () => {
  const { isChatOpen } = useChatbot()

  return (
    <div
      className={classNames(classes.chat, {
        [classes.open]: isChatOpen,
      })}
    >
      <Header />
      <Dialog />
      <Footer />
    </div>
  )
}
