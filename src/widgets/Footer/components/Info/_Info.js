import { useRef } from 'react'
import { useAnimateRef } from 'shared/model'
import { Text } from 'shared/ui'
import {
  IconLogoFooter,
  IconCopyright,
} from 'shared/assets/icons'
import classes from '../../_Footer.module.scss'

export const Info = ({ info }) => {
  const infoRef = useRef(null)
  useAnimateRef(infoRef)

  return (
    <div className={classes.info} ref={infoRef}>
      <button className={classes.logo}>
        <IconLogoFooter />
      </button>
      <div className={classes.copies}>
        {info?.texts.length > 0 &&
          info.texts.map((text) => (
            <Text key={text} className={classes.copy}>
              {text}
            </Text>
          ))}
      </div>
      <a
        className={classes.copyright}
        href={info?.copyright.url}>
        <IconCopyright />
      </a>
    </div>
  )
}
