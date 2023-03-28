import { memo } from 'react'
import { classNames } from 'shared/lib/helpers'
import classes from '../../Header.module.scss'

export const Burger = memo(({ isBurgerActive, onBurgerClick }) => {
  return (
    <button
      className={classNames(classes.burger, {
        [classes.active]: isBurgerActive,
      })}
      onClick={onBurgerClick}
    >
      <span></span>
    </button>
  )
})
