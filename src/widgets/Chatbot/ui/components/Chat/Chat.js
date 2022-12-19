import { useChatbot } from 'shared/model'
import { Header } from './components/Header'
import { Dialog } from './components/Dialog'
import { Footer } from './components/Footer'
import classes from './Chat.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Chat = () => {

  const { isChatOpen } = useChatbot()

  return (
    <div className={classNames(classes.chat, { [classes.open]: isChatOpen })}>
      <Header />
      <Dialog />
      <Footer />
    </div>
  )
}