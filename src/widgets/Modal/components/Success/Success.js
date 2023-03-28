import classes from '../../Modal.module.scss'

export const Success = ({ children }) => {
  return <div className={classes.success}>{children}</div>
}
