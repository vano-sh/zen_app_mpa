import { useProgressBar } from 'shared/model'
import classes from './ProgressBar.module.scss'

export const ProgressBar = () => {

  useProgressBar()

  return (
    <div
      data-name='progress-bar'
      className={classes.progress_bar}
    ></div>
  )
}