import { IconPreload } from 'shared/assets/icons'
import classes from './_Preloader.module.scss'

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <IconPreload />
    </div>
  )
}
