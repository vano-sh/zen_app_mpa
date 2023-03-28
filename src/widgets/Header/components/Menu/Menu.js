import { memo } from 'react'
import { MenuItem } from './components'
import { classNames } from 'shared/lib/helpers'
import classes from '../../Header.module.scss'

export const Menu = memo(({ menuItems, isBurgerActive, setIsBurgerActive }) => {
  return (
    <ul
      className={classNames(classes.menu, {
        [classes.active]: isBurgerActive,
      })}
    >
      {menuItems?.length > 0 &&
        menuItems.map((item) => (
          <MenuItem
            key={item.target}
            item={item}
            setIsBurgerActive={setIsBurgerActive}
          />
        ))}
    </ul>
  )
})
