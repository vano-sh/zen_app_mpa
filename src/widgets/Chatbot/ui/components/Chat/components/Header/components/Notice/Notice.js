import { useChatbot, useLang } from 'shared/model'
import { classNames } from 'shared/lib/helpers'
import classes from '../../../../Chat.module.scss'

export const Notice = () => {

  const { isBotWriting } = useChatbot()
  const { lang } = useLang()

  const writingText = lang === 'en'
    ? 'writing'
    : 'печатает'

  return (
    <>
      {isBotWriting && (
        <div className={classNames(classes.notice)}>
          <span>{writingText} </span>
          <span className={classes.dot}>. </span>
          <span className={`${classes.dot} ${classes.second}`}>. </span>
          <span className={`${classes.dot} ${classes.third}`}>.</span>
        </div>
      )
      }
    </>
  )
}