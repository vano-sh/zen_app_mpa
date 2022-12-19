import { memo } from 'react'
import classes from '../../Header.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Burger = memo(({ isBurgerActive, onBurgerClick }) => {

  return (
    <button
      className={classNames(
        classes.burger,
        { [classes.active]: isBurgerActive }
      )}
      onClick={onBurgerClick}
    >
      <span></span>
    </button>
  )
})