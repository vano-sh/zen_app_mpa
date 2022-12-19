import { useEffect, useRef } from 'react'
import { useChatbot, useLang } from 'shared/model'
import { useDispatch } from 'react-redux'
import { Message } from './components/Message'
import { scrollToLastMessage } from 'shared/lib/helpers'
import classes from '../../Chat.module.scss'

export const Dialog = () => {

  const dialogRef = useRef(null)

  const {
    isChatOpen,
    faq,
    messages,
    addMessages,
    toggleIsBotWriting
  } = useChatbot()

  const { lang } = useLang()

  const dispatch = useDispatch()

  const botBaseAnswer = lang === 'en'
    ? 'Basic answer to the question:'
    : 'Базовый ответ на вопрос:'


  useEffect(() => {
    if (!isChatOpen || !faq) return

    const dialog = dialogRef.current

    scrollToLastMessage(dialog)

    if (messages.length === 0) {
      dispatch(toggleIsBotWriting(true))

      const timerID = setTimeout(() => {
        dispatch(addMessages({
          talker: 'bot',
          messageType: 'startMessage',
          message: faq.startMessage
        }))

        dispatch(toggleIsBotWriting(false))
      }, 1000)


      return () => clearTimeout(timerID)
    }

    if (messages.length === 1) {
      dispatch(toggleIsBotWriting(true))
      const timerID = setTimeout(() => {
        dispatch(addMessages(
          {
            talker: 'bot',
            messageType: 'questions',
            message: faq.list
          }
        ))

        dispatch(toggleIsBotWriting(false))
      }, 1000)

      return () => clearTimeout(timerID)
    }

    if (messages[messages.length - 1].talker === 'user') {
      dispatch(toggleIsBotWriting(true))

      const userQuestion = messages[messages.length - 1].message

      const faqAnswer = faq.list.find((faqItem) => faqItem.question === userQuestion)?.answer

      const botAnswer = faqAnswer ?? `${botBaseAnswer} '${userQuestion}'`

      const timerID = setTimeout(() => {
        dispatch(addMessages(
          {
            talker: 'bot',
            messageType: 'answer',
            message: botAnswer
          }
        ))

        dispatch(toggleIsBotWriting(false))
      }, 1000)


      return () => clearTimeout(timerID)

    }

  }, [
    faq,
    messages,
    isChatOpen,
    botBaseAnswer,
    addMessages,
    dispatch,
    toggleIsBotWriting
  ])

  return (
    <div className={classes.dialog} ref={dialogRef}>
      {messages.length > 0 && messages.map((message, index) => (
        <Message
          key={index}
          talker={message.talker}
          messageType={message.messageType}
          message={message.message}
        />
      ))}
    </div>
  )
}