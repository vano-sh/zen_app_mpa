import { memo } from 'react'
import { MenuItem } from './MenuItem'
import classes from '../../Header.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Menu = memo(
  ({ menuItems, isBurgerActive, setIsBurgerActive }) => {
    return (
      <ul
        className={classNames(classes.menu, {
          [classes.active]: isBurgerActive,
        })}>
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
  }
)
