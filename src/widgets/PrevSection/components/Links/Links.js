import { IconApple, IconGoogle } from 'shared/assets/icons'
import classes from '../../PrevSection.module.scss'

export const Links = ({ links }) => {
  return (
    <div className={classes.links}>
      {links?.length > 0 &&
        links.map((link) => (
          <a className={classes.link} href={link.url} key={link.name}>
            {link.name === 'apple' ? <IconApple /> : <IconGoogle />}
          </a>
        ))}
    </div>
  )
}
