import { IconLogo } from 'shared/assets/icons'
import classes from '../../../../Chat.module.scss'

export const Logo = () => {
  return (
    <div className={classes.logo}>
      <IconLogo />
    </div>
  )
}
