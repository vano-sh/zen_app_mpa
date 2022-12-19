import { useChatbot } from 'shared/model/hooks/_useChatbot'
import { useDispatch } from 'react-redux'
import { classNames, getCurrentTime } from 'shared/lib/helpers'
import classes from '../../../../Chat.module.scss'

export const Message = ({ talker, messageType, message }) => {

  const { addMessages } = useChatbot()

  const dispatch = useDispatch()

  const handleQuestionClick = (event) => {
    const question = event.currentTarget.textContent

    dispatch(addMessages(
      {
        talker: 'user',
        messageType: 'question',
        message: question
      }
    ))
  }

  if (talker === 'bot') {
    switch (messageType) {
      case 'questions': return (
        <div className={classNames(
          classes.message,
          {
            [classes.bot]: talker === 'bot',
            [classes.user]: talker === 'user'
          })}
        >
          <ol className={classes.list}>
            {message.map((item, index) => (
              <li key={index} className={classes.item}>
                <span>{item.id}.</span>

                <button onClick={handleQuestionClick}>
                  {item.question}
                </button>
              </li>
            ))}
          </ol>

          <span className={classes.date}>
            {getCurrentTime()}
          </span>
        </div>
      )

      default: return (
        <div className={classNames(
          classes.message,
          {
            [classes.bot]: talker === 'bot',
            [classes.user]: talker === 'user'
          })
        }>
          {message}

          <span className={classes.date}>
            {getCurrentTime()}
          </span>
        </div>
      )
    }
  }

  if (talker === 'user') {
    return (
      <div className={classNames(
        classes.message,
        {
          [classes.bot]: talker === 'bot',
          [classes.user]: talker === 'user'
        })
      }>
        {message}

        <span className={classes.date}>
          {getCurrentTime()}
        </span>
      </div>
    )
  }
}